import React from 'react';
import "../grid.css"
import MovieInfo from "./movieInfo"

const Header = props => {
    return (
        <div className="container">
            {props.headerItemsArr.map(headerItem => <div key={headerItem} className="columnHeader"><h3>{headerItem}</h3></div>)}
            <div className="columnEmptyDiv"></div>
            <MovieInfo />
        </div>
    )
}

export default Header;