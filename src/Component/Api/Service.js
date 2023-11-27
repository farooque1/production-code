// api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest', // Your API base URL
});

api.interceptors.request.use(config => {
    const token = import.meta.env.VITE_API_TOKEN; // Replace this with your actual authorization token
    if (token) {
        console.log("Token",token);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    console.log("error interceptors",error);
    return Promise.reject(error);

});

export default api;
