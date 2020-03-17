import React, { Component } from 'react';
import "./layout.css"
import { getMovies } from "./services/fakeMovieService";
import MovieCounter from "./components/MovieCounter";
import { paginate } from "./utils/paginate";
import Grid from "./components/grid/MainGrid";
import ListGroup from "./components/common/ListGroup";
import { getGenres } from "./services/fakeGenreService"

class App extends Component {
    state = {
        data: [],
        pageSize: 4,
        currentPage: 1,
        filtered: [],
        genres: [],
        currentGenre: "allGenres"
    };

    componentDidMount() {
        this.setState({ data: getMovies(), genres: getGenres() })
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
            data: this.state.data.filter(movie => movie._id !== id)
        })
        // console.log(this.state.data)
    };

    handleReset = () => {
        console.log("handleReset Clicked")
        const data = getMovies();
        this.setState({
            currentGenre: "allGenres",
            data
        });
    };

    handleGenreChange = (genre, id) => {
        console.log(id, " Clicked")
        const data = getMovies();
        const filtered = data.filter(data => data.genre._id === id);
        this.setState({
            currentGenre: genre,
            data: filtered
        });
    };

    render() {
        const { data: allMovies, pageSize, currentPage, genres, currentGenre } = this.state;

        const movies = paginate(allMovies, currentPage, pageSize);

        const count = this.state.data.length;
        console.log(count)

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
                    <ListGroup
                        genres={genres}
                        currentGenre={currentGenre}
                        onReset={this.handleReset}
                        onGenreChange={this.handleGenreChange}
                    />
                </div>
            </div>
        );
    }

    formatCount() {
        const count = this.state.data.length;
        return count === 0 ? "There are no movies in the database" : "Showing " + count + " movies in the database.";
    }

    getDisplayClasses() {
        let classes = "";
        const count = this.state.data.length;
        classes += (count === 0) ? "containerNone" : "table";
        return classes;

    };
}

export default App;

