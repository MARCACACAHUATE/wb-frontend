import axios from "axios";

export const reqqResapi = axios.create({
    baseURL: 'https://wb-backend.up.railway.app/'
    // baseURL: 'http://localhost:5204/'
});