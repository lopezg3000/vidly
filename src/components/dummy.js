import React from 'react';
import "../grid.css"
import MovieInfo from "./movieInfo"

const Header = props => {
    return (
        <div className="container">
            {props.headerItemsArr.map(headerItem => <div key={headerItem} className={headerItem}><h1>{headerItem}</h1></div>)}
            <div className="blankColumn"></div>
            <MovieInfo />
        </div>
    )
}

export default Header;