import React from 'react';
import "../../grid.css";
import Like from "../common/Like"


const MovieInfo = props => {
    console.log(props);
    return (
        <React.Fragment>
            {props.data.map(movie => (
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
                        <h3><Like movie={movie} liked={movie.liked} onLike={props.onLike} /></h3>
                    </div>
                    <div className="buttonContainer">
                        <button type="button" className="btn btn-danger" onClick={() => props.onDelete(movie._id)} ><h3>Delete</h3></button>
                    </div>
                </React.Fragment>
            ))
            }
        </React.Fragment >
    );
}

export default MovieInfo;




// onClick={() => this.handleOnDelete(movie._id)}