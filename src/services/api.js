import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: "http://localhost:1337",      // development
    // baseURL: "http://159.65.236.163:8080/" // production
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;