import { useState } from "react"

export const Button = (props) => {

    const { text, color, customStyle} = props
    const style = {
        backgroundColor: color, 
        color: color === 'black' ? "white" : color === "blue" ? "white" : "black",
        ...customStyle
    }
    return (
        <button className="bttn" style={style} onClick={props.handleClick}>
            {text}
        </button>
    )
}