import React from 'react';
import "../../grid.css"

const Header = props => {
    console.log(props)
    return (
        <React.Fragment>
            {props.headerItemsArr.map(headerItem => <div key={headerItem} className="columnHeader"><h3>{headerItem}</h3></div>)}
            < div className="columnEmptyDiv" ></div >
            < div className="columnEmptyDiv" ></div >
        </React.Fragment>
    )
}

export default Header;