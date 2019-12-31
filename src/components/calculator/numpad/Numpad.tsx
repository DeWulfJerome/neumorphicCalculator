import React from 'react'
import Button from './Button'

import "./numpadStyle.css";

interface Props {
    numberPressed: (numb: string, type: string, operation?: string) => void
}

function Numpad(props: Props) {
    const {numberPressed} = props

    return (
        <div>
            
            <div className="numpad-row">
                <Button text={"7"} onClick={numberPressed} type={"number"}></Button>
                <Button text={"8"} onClick={numberPressed} type={"number"}></Button>
                <Button text={"9"} onClick={numberPressed} type={"number"}></Button>
                <Button text={"÷"} onClick={numberPressed} type={"operation"} operation={"divide"}></Button>
            </div>
            <div className="numpad-row">
                <Button text={"4"} onClick={numberPressed} type={"number"}></Button>
                <Button text={"5"} onClick={numberPressed} type={"number"}></Button>
                <Button text={"6"} onClick={numberPressed} type={"number"}></Button>
                <Button text={"x"} onClick={numberPressed} type={"operation"} operation={"multiply"}></Button>
            </div>            
            <div className="numpad-row">
                <Button text={"1"} onClick={numberPressed} type={"number"}></Button>
                <Button text={"2"} onClick={numberPressed} type={"number"}></Button>
                <Button text={"3"} onClick={numberPressed} type={"number"}></Button>
                <Button text={"+"} onClick={numberPressed} type={"operation"} operation={"add"}></Button>
            </div>
            <div className="numpad-row">                   
                <Button text={"C"} onClick={numberPressed} type={"clear"}></Button>               
                <Button text={"0"} onClick={numberPressed} type={"number"}></Button>
                <Button text={"="} onClick={numberPressed} type={"result"}></Button>
                <Button text={"-"} onClick={numberPressed} type={"operation"} operation={"subtract"}></Button>
            </div>
        </div>
    )
}

export default Numpad
