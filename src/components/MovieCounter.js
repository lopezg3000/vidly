import React from "react";


const Counter = props => {
    return (
        <div className="box header">
            <h3>{props.formatCount}</h3>
        </div>
    );

}


export default Counter;