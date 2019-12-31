import React from 'react'
import "./numpadStyle.css";

interface Props {
    text: string;
    onClick: (text: string, type: string, operation?: string) => void;
    type: string;
    operation?: string;
}

const Button: React.FC<Props> = (props: Props) =>{
    const {text, onClick, type, operation} = props

    return (
        <div className="calc-num-btn" onClick={() => {onClick(text, type, operation);}}>
          {text}
        </div>
    )
}

export default Button
