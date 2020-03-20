import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from "../utils/paginate";


class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4
    };

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    };

    handleDelete = movie => {
        // console.log(movie.title, " Deleted");
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    handleLike = (movie) => {
        // console.log(movie.title, " Like Clicked");
        const movies = [...this.state.movies]; //copy to not modify the state directly
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] }; //copy to not modify the object directly
        movies[index].liked = !movies[index].liked; //creating a new property, switch from undefined to true with event, like property not present before this.
        this.setState({ movies })
        // console.log(movie.title, "liked: ", movies[index].liked);
    };

    handlePageChange = page => {
        // console.log(page);
        this.setState({ currentPage: page });
    };

    handleGenreSelect = genre => {
        console.log(genre);
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        if (count === 0) return <p>There are no movies in this database.</p>;

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres}
                        textProperty="name"
                        valueProperty="_id"
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {count} movies in this database.</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie => (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
                                    </td>
                                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
