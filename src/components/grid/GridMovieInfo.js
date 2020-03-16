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
                        <h4>{movie.title}</h4>
                    </div>
                    <div className="movieInfo">
                        <h4>{movie.genre.name}</h4>
                    </div>
                    <div className="movieInfo">
                        <h4>{movie.numberInStock}</h4>
                    </div>
                    <div className="movieInfo">
                        <h4>{movie.dailyRentalRate}</h4>
                    </div>
                    <div className="movieInfo">
                        <h4><Like movie={movie} liked={movie.liked} onLike={onLike} /></h4>
                    </div>
                    <div>
                        <button type="button" className="btn btn-danger" onClick={() => onDelete(movie._id)} ><h5>Delete</h5></button>
                    </div>
                </React.Fragment>
            ))
            }
            <Pagination count={count} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />
        </React.Fragment >
    );
}

export default MovieInfo;




// onClick={() => this.handleOnDelete(movie._id)}