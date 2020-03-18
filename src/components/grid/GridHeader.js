import React from 'react';
import "../../grid.css"

const Header = props => {
    // console.log(props);
    const { headerItemsArr, onSort } = props;
    return (
        <React.Fragment>
            {headerItemsArr.map(
                headerItem =>
                    <div key={headerItem} className="columnHeader" onClick={() => onSort(headerItem)} >
                        <h4>{headerItem}</h4>
                    </div>)}
            < div className="columnEmptyDiv" ></div >
            < div className="columnEmptyDiv" ></div >
        </React.Fragment>
    )
}

export default Header;