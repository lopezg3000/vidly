import React, { Component } from 'react';
import MovieTable from './moviesTable'
import { getMovies } from '../services/movieService';
import { getGenres } from '../services/genreService';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import SearchBox from './common/searchBox';
import { paginate } from '../utils/paginate';
import { Link } from 'react-router-dom';
import _ from 'lodash';

//Node Backend Set up, but need to create repo on github

class Movies extends Component {
    state = {
        search: '',
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: '',
        selectedGenre: null,
        sortColumn: { path: 'title', order: 'asc' }
    };

    async componentDidMount() {
        const { data } = await getGenres();
        console.log(data);
        const genres = [{ _id: "", name: 'All Genres' }, ...data];
        const { data: movies } = await getMovies();
        this.setState({ genres, movies });
        // console.log(genres)
    };

    handleDelete = movie => {
        console.log(movie, " Deleted");
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
        this.setState({ selectedGenre: genre, searchQuery: '', currentPage: 1 });
    };

    handleSearch = (query) => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    };

    handleSaveMovie = newMovie => {
        const movie = newMovie;
        const movies = [movie, ...this.state.movies]
        this.setState({ movies })
    };

    getPageData = props => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            searchQuery,
            movies: allMovies
        } = this.state;

        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

        if (count === 0) return <p>There are no movies in this database.</p>;

        const { totalCount, data: movies } = this.getPageData();

        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <Link
                        to='/movies/new'
                        className='btn btn-primary'
                        style={{ marginBottom: 20 }}
                    >
                        New Movie
                    </Link>
                    <p>Showing {totalCount} movies in this database.</p>
                    <SearchBox value={searchQuery} onChange={this.handleSearch} />
                    <MovieTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={totalCount}
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
