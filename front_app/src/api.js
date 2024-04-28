import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000';

const getRequest = () => {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    let authToken = localStorage.getItem('authToken');
    if (authToken != null && authToken != ''){
        axios.defaults.headers.common['Authorization'] = `Token ${authToken}`;
    }
    return axios
}

const Request = {

    get : (url, params) => {
        return getRequest().get(url, params);
    },

    post : (url, data, params) => {
        return getRequest().post(url, data, params);
    },

    patch : (url, data, params) => {
        return getRequest().patch(url, data, params);
    },

    put : (url, data, params) => {
        return getRequest().put(url, data, params);
    },

    del : (url, params) => {
        return getRequest().delete(url, params);
    },
}

export default Request;