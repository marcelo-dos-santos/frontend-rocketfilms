import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api-rocketfilms.onrender.com'
});