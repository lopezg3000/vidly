import http from "./httpService";
// import { getGenres } from "./genreService"
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
    return http.get(apiEndpoint);
}

export function getMovie(movieId) {
    return http.get(apiEndpoint + '/' + movieId);
}

export function saveMovie(movie) {
    if (movie._id) {
        const body = { ...movie };
        delete body._id;
        return http.put(apiEndpoint + '/' + movie._id, body); //body object cannot have id.
    }

    return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + '/' + movieId);
}
