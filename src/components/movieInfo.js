import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";


class MovieInfo extends Component {
    state = {
        loading: true,
        error: "",
        data: getMovies()
    }

    render() {

        return (
            <React.Fragment>
                {this.state.data.map(movie => (
                    <React.Fragment>
                        <div key={movie.title} className={movie.title}>
                            {movie.title}
                        </div>
                        <div key={movie.genre.name} className={movie.genre.name}>
                            {movie.genre.name}
                        </div>
                        <div key={movie.numberInStock} className={movie.numberInStock}>
                            {movie.numberInStock}
                        </div>
                        <div key={movie.dailyRentalRate} className={movie.dailyRentalRate}>
                            {movie.dailyRentalRate}
                        </div>
                        <div className="deleteButton">
                            <button>Delete</button>
                        </div>
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    }

}

export default MovieInfo;
