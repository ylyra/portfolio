import axios from 'axios';

const api = axios.create({
    baseURL:'https://yanlyra.com.br',
})

export default api;