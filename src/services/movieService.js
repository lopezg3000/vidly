import http from "./httpService";
// import { getGenres } from "./genreService"
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
    return http.get(apiEndpoint);
}

export function getMovie(id) {
    console.log(id);
    return http.get(apiEndpoint + '/' + id);
}

export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + '/' + movieId);
}

export function saveMovie(movie) {
    console.log(movie);
    let movieInDb = movie || {}; // movie is found or is set to empty obj
    movieInDb.title = movie.title;
    movieInDb.genre = movie.genreId;
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    //new properties are added to movieInDb based on argument passed.

    if (!movieInDb._id) {
        return http.post(apiEndpoint, movieInDb);
    } else {
        return http.patch(apiEndpoint + '/' + movieInDb._id, movieInDb);
    }


    //if new movie we give it an id before pushing it into database

    // return movieInDb; //movie already exists, movieInDb returned but where? For what purpose?
}