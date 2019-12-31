class Operation {
  constructor(options) {
    this.options = options;
    this.inputs = [];
    for (let key in options) {
      this[key] = options[key];
    }
  }

  addInput = function(input) {
    if (this.isSaturated()) return this;
    this.inputs.push(input);
    return this;
  };

  isInvalidInput =
    this.invalidInput ||
    function() {
      return false;
    };

  isSaturated = function() {
    let inputCount = this.singleInput ? 1 : 2;
    for (let i = 0; i < inputCount; i++) {
      if (this.inputs[i] == null || isNaN(this.inputs[i])) return false;
    }
    return true;
  };

  execute = function() {
    if (this.error) return this;
    if (!this.isSaturated() || this.value != null) return this;
    let inputValues = this.inputs.map(function(input) {
      return Number(input);
    });
    this.error = this.isInvalidInput.apply(this.inputValues);
    if (this.error) {
      throw new Error(this.error);
    }
    this.calculationString = this.getCalculationString();
    this.value = this.operation.apply(this, inputValues);
    return this;
  };

  getCalculationString = function(lastInput, collapsed) {
    if (collapsed) {
      this.execute();
      if (this.value != null) return this.value.toString();
    }
    let singleInput = this.singleInput;
    let inputValues = this.inputs.map(function(input) {
      let inputValue = input.getCalculationString
        ? input.getCalculationString(lastInput, collapsed)
        : input.toString();
      return singleInput ? inputValue.replace(/^\((.*)\)$/g, "$1") : inputValue;
    });
    return this.options.output.apply(this, inputValues.concat([lastInput]));
  };

  valueOf = function() {
    if (this.value == null) {
      this.execute();
    }
    return this.value;
  };

  toString = function() {
    if (this.calculationString == null) {
      this.execute();
    }
    return this.getCalculationString();
  };
}

export default Operation;
