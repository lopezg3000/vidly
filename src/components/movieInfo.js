import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";


class MovieInfo extends Component {
    state = {
        loading: true,
        error: "",
        data: getMovies()
    }
    // loadData = () => {
    //     this.setState({ loading: true });
    //     return getMovies()
    //         .then(result => {
    //             console.log(result)
    //             this.setState({
    //                 data: result.movies,
    //                 loading: false,
    //                 error: false
    //             })
    //         })
    //         .catch(error => {
    //             console.error("error: ", error);
    //             this.setState({
    //                 error: `${error}`,
    //                 loading: false
    //             })
    //         })
    // }

    // componentDidMount() {
    //     this.loadData();
    // }

    render() {
        // const { loading, error, data } = this.state;
        // if (loading) {
        //     return <p>Loading ...</p>;
        // }
        // if (error) {
        //     return (
        //         <p>
        //             There was an error loading the repos.{" "}
        //             <button onClick={this.loadData}>Try again</button>
        //         </p>
        //     );
        // }

        // console.log("This is" + data);
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
