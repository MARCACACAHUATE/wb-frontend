import axios from "axios";

export const reqqResapi = axios.create({
    baseURL: 'http://localhost:5204/'
});