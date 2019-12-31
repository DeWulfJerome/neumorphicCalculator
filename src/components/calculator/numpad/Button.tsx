import React, {useState} from 'react'
import "./numpadStyle.css";

interface Props {
    text: string;
    onClick: (text: string, type: string, operation?: string) => void;
    type: string;
    operation?: string;
}

const Button: React.FC<Props> = (props: Props) =>{
    const {text, onClick, type, operation} = props;
    const [mouseDown, setMouseDown] = useState<boolean>(false);

    return (
        <div className={ mouseDown ? ("calc-num-btn down")  : ("calc-num-btn")}
        onMouseDown={() => {setMouseDown(true);}} 
        onMouseUp={() => {setMouseDown(false)}} 
        onClick={() => {onClick(text, type, operation);}}>
          {text}
        </div>
    )
}

export default Button
