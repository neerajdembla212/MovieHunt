import * as actionConstants from './constants';
import { apiRequest } from '../../utils/ApiGateway';
import { Constants } from '../../utils/Constants';

export const fetchMovies = () => dispatch => {
    dispatch(fetchMoviesBegin());
    apiRequest({
        url: 'discover/movie?api_key=4bb955e6aae237838a1240436707d121&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    }).then(res => {
        if (Constants.SUCCESS_HTTP_CODES.indexOf(res.status) > -1) {
            dispatch(fetchMoviesSuccess(res.data.results));
        }
    }).catch(res => {

    })
}

function fetchMoviesBegin() {
    return {
        type: actionConstants.FETCH_MOVIES_BEGIN
    }
}

function fetchMoviesSuccess(movies) {
    return {
        type: actionConstants.FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

function fetchMoviesFailure(error) {
    return {
        type: actionConstants.FETCH_MOVIES_FAILURE,
        payload: error
    }
}