import axios from "axios";

const API_URL = (process.env.NODE_ENV === 'production') ?
    "http://backend:8085/api" : "http://localhost:8085/api";

const api = axios.create({baseURL: API_URL});

export default api;