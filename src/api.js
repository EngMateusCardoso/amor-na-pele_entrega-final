import axios from 'axios'

const api = axios.create({
    baseURL:'https://apiamornapele.herokuapp.com/'
})

export default api;
