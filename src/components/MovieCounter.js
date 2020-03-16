import React from "react";


const Counter = props => {
    return (
        <div className="box header">
            <h4>{props.formatCount}</h4>
        </div>
    );

}


export default Counter;