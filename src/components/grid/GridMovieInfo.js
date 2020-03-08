import React from 'react';
import "../../grid.css";
import Like from "../common/Like"
import Pagination from "../common/Pagination"

const MovieInfo = props => {
    // console.log(props);
    const { movies, onLike, onDelete, count, pageSize, onPageChange, currentPage } = props;
    return (
        <React.Fragment>
            {movies.map(movie => (
                <React.Fragment key={movie._id}>
                    <div className="movieInfo">
                        <h3>{movie.title}</h3>
                    </div>
                    <div className="movieInfo">
                        <h3>{movie.genre.name}</h3>
                    </div>
                    <div className="movieInfo">
                        <h3>{movie.numberInStock}</h3>
                    </div>
                    <div className="movieInfo">
                        <h3>{movie.dailyRentalRate}</h3>
                    </div>
                    <div className="movieInfo">
                        <h3><Like movie={movie} liked={movie.liked} onLike={onLike} /></h3>
                    </div>
                    <div className="buttonContainer">
                        <button type="button" className="btn btn-danger" onClick={() => onDelete(movie._id)} ><h3>Delete</h3></button>
                    </div>
                </React.Fragment>
            ))
            }
            <h3><Pagination count={count} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} /></h3>
        </React.Fragment >
    );
}

export default MovieInfo;




// onClick={() => this.handleOnDelete(movie._id)}