import React, {useState} from 'react'

import Operation from "./Operation";
import operationList from "./operationList";

import Numpad from "./numpad/Numpad";
import Screen from "./Screen";

interface Props {}

type OperationType = {
    [key: string]: any
}

const operants = ["÷", "+", "-", "x"];

function Calculator(props: Props) {
    const [calcString, setCalcString] = useState<string>("0");
    const [currentOperation, setCurrentOperation] = useState<OperationType>({});

    const pressed = (input: string, type: string, operation?: string) => {        
        if(type === "clear"){
            setCalcString("0");
            setCurrentOperation({});
            return;
        }
        if(type === "number"){
            updateScreen(input)
            return;
        }
        if(type === "operation" && operation){
            operate(operation, input);
            return;
        }
        if(type === "result"){
            calculateResult();
            return;
        }        
    }

    const calculateResult = () => {
        if(!operants.includes(calcString)){            
            if(Object.keys(currentOperation).length !== 0){
                currentOperation.addInput(calcString);
                let value = String(currentOperation.valueOf());
                setCalcString(value);
            }
        }
    }

    const operate = (operation: string, input: string) => {
        if(!operants.includes(calcString)){
            // create  operation if no pending operation
            let currentOperationHolder;
            if(Object.keys(currentOperation).length === 0){            
                currentOperationHolder = new Operation(operationList[operation])
            }else{
                currentOperationHolder = currentOperation;
            }

            // finish previous operation
            currentOperationHolder.addInput(calcString);
            if(currentOperationHolder.inputs.length === 2){
                let value = currentOperationHolder.valueOf();
                currentOperationHolder = new Operation(operationList[operation]);
                currentOperationHolder.addInput(Number(value));
            }
        
            setCalcString(input);
            setCurrentOperation(currentOperationHolder);
        }
    }

    const updateScreen = (newVal: string) => {
        if(calcString !== "0" && !operants.includes(calcString)){
            setCalcString(calcString + newVal);
        }else{
            setCalcString(newVal);
        } 
    }

    return (
        <div className="calculator">           
            <Screen screenText={calcString}></Screen>
            <Numpad numberPressed={pressed}></Numpad>
        </div>
    )
}

export default Calculator
