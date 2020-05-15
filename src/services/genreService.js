import http from './httpService';
import config from '../config.json';

export const genres = http.get(config.genresEndpoint);

export function getGenres() {
    return genres;
}