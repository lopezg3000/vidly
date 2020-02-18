import React from "react";
import "../grid.css";


const Counter = props => {
    return (
        <div className="containerCounter">
            <h3>{props.formatCount}</h3>
        </div>
    );
}




export default Counter;