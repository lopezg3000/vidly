import React, { Component } from 'react';
import "./layout.css"
import { getMovies } from "./services/fakeMovieService";
import MovieCounter from "./components/MovieCounter";
import { paginate } from "./utils/paginate";
import Grid from "./components/grid/MainGrid";
import ListGroup from "./components/common/ListGroup";
import { genres } from "./services/fakeGenreService"

class App extends Component {
    state = {
        count: 9,
        data: getMovies(),
        pageSize: 4,
        currentPage: 1,
        genres: genres
    };

    handlePageChange = page => {
        // console.log(page);
        this.setState({ currentPage: page });
    };

    handleLike = movie => {
        // console.log("Clicked Like", movie);
        const data = [...this.state.data];
        const index = data.indexOf(movie);
        data[index] = { ...movie };
        data[index].liked = !data[index].liked;
        this.setState({ data });
    };

    handleDelete = id => {
        this.setState({
            data: this.state.data.filter(movie => movie._id !== id),
            count: this.state.count - 1
        })
        // console.log(this.state.data)
    };

    render() {
        const { count, data: allMovies, pageSize, genres, currentPage } = this.state;

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <div className="container">
                <MovieCounter className="box header" formatCount={this.formatCount()} />
                <div className={this.getDisplayClasses()}>
                    <Grid
                        count={count}
                        movies={movies}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        onPageChange={this.handlePageChange}
                    />
                </div>
                <div className="filter">
                    <ListGroup genres={genres} />
                </div>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "There are no movies in the database" : "Showing " + count + " movies in the database.";
    }

    getDisplayClasses() {
        let classes = "";
        classes += (this.state.count === 0) ? "containerNone" : "table";
        return classes;

    };
}

export default App;

