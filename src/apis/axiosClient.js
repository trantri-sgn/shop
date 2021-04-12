import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://cfd-reactjs.herokuapp.com/elearning/v4',
    headers: {
        'Content-Type': 'application/json'
    },
})


export default axiosClient;