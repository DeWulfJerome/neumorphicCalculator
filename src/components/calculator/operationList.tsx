type OperationList = {
    [key: string]: object
}

const operationList:OperationList = {
    add: {
        precedence: 1,
        name: "add",
        operation: (a:number ,b:number) => {return a + b},
        output: (a: string, b: string) => {return a + ' + ' + b;},
    },
    subtract: {
        precedence: 1,
        name: "subtract",
        operation: (a:number ,b:number) => {return a - b},
        output: (a: string, b: string) => {return a + ' - ' + b;},
    },
    divide: {
        precedence: 2,
        name: "divide",
        operation: (a:number ,b:number) => {return a / b},
        isInvalidInput: (a: number,b:number) => {return b === 0 ? 'division by 0' : false},
        output: (a: string, b: string) => { return a + ' / ' + b;},
    },
    multiply: {
        precedence: 2,
        name: "multiply",
        operation: (a:number ,b:number) => {return a * b},
        output: (a: string, b: string) => {return a + ' x ' + b;},
    }
}

export default operationList;