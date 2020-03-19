import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';


class Movies extends Component {
    state = {
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4
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

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage } = this.state;

        if (count === 0)
            return <p>There are no movies in this database.</p>;

        return (
            <React.Fragment>
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
                        {this.state.movies.map(movie => (
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
            </React.Fragment>
        );
    }
}

export default Movies;
