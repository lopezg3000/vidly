import React from 'react';
import Header from "./dummy"


const Grid = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Header headerItemsArr={["Title", "Genre", "Stock", "Rate"]} />
        </div>
    );

};

export default Grid;

// create 5 columns at the top: Title, genre, stock, rate, button 
// 9 rows with information 
// Delete button removes row
// top shows the number of items in the movie List

