import React from "react";
import '../styles/counter.css'

function Counter({ clicks }) {
    return(
        <div className="counter">
            {clicks}
        </div>
    )
}

export default Counter;