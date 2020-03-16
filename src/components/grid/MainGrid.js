import React from 'react';
import Header from "./GridHeader";
import MovieInfo from "./GridMovieInfo";
import "../../grid.css";

const Grid = props => {
    const { count, movies, pageSize, currentPage, onDelete, onLike, onPageChange } = props;

    return (
        <React.Fragment>
            <Header headerItemsArr={["Title", "Genre", "Stock", "Rate"]} count={count} />
            <MovieInfo
                count={count}
                movies={movies}
                pageSize={pageSize}
                currentPage={currentPage}
                onDelete={onDelete}
                onLike={onLike}
                onPageChange={onPageChange}
            />
        </React.Fragment>
    );
}

export default Grid;



// create 5 columns at the top: Title, genre, stock, rate, button 
// 9 rows with information 
// Delete button removes row
// top shows the number of items in the movie List

