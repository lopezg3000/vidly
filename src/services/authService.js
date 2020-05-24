import jwtDecode from 'jwt-decode';
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    return localStorage.setItem('token', jwt);
}

export function logout() {
    return localStorage.removeItem('token');
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem('token');
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}


export default {
    login,
    logout,
    getCurrentUser
}