import axios from 'axios';

// "https://localhost:3130"

// "https://zuckgrantapi.onrender.com"

export default axios.create({
    baseURL: "https://zuckgrantapi.onrender.com"
});