import { Constants } from './Constants';
const axios = require('axios');
let singletonAxios;

export function apiRequest(options = {}) {
    const axios = getAxiosInstance(options);

    return axios(options);
}

function getAxiosInstance(options) {
    if (singletonAxios) {
        return singletonAxios;
    } else {
        singletonAxios = axios.create({
            baseUrl: 'https://api.themoviedb.org/3/',
            headers: Constants.HTTP_HEADERS,
        });

        return singletonAxios;
    }
}