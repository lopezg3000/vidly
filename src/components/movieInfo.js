import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";


class MovieInfo extends Component {
    state = {
        data: getMovies()
    }


    handleOnDelete = (id) => {
        this.setState({
            data: this.state.data.filter(movie => movie._id !== id)
        })
        console.log(this.state.data)
    }

    render() {
        return (
            <React.Fragment>
                {this.state.data.map(movie => (
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
                        <div className="buttonContainer">
                            <button type="button" className="btn btn-danger" onClick={() => this.handleOnDelete(movie._id)}><h3>Delete</h3></button>
                        </div>
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    }

}

export default MovieInfo;
