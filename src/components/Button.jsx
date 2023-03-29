import React from "react";
import '../styles/button.css';

function Button({ text, clickButton, driverClick }){
    return(
        <button
        className={ clickButton ? "button-click" : "button-restrat" }
        onClick={driverClick}>
        {text}
        </button>
    )
}

export default Button;