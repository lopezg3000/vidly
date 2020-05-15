import * as genresAPI from "./fakeGenreService";
import http from "./httpService";
import config from "../config.json";

const movies = http.get(config.moviesEndpoint);

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
}

export function deleteMovie(movieId) {
    return http.delete(config.moviesEndpoint + '/' + movieId);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {}; // movie is found or is set to empty obj
    movieInDb.title = movie.title;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    //new properties are added to movieInDb based on argument passed.

    if (!movieInDb._id) {
        movieInDb._id = Date.now().toString();
        movies.push(movieInDb);
    } //if new movie we give it an id before pushing it into database

    return movieInDb; //movie already exists, movieInDb returned but where? For what purpose?
}