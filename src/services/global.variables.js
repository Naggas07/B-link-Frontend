import axios from "axios";

const API_URL = "https://blink-backend.oa.r.appspot.com";

const http = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default http;
