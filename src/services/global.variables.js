import axios from "axios";

const API_URL = process.env.REACT_API_APP || "http://localhost:5000/";

const http = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

export default http;
