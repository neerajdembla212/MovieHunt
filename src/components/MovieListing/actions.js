import * as actionConstants from './constants';
import { apiRequest } from '../../utils/ApiGateway';
import { Constants } from '../../utils/Constants';

export const fetchMovies = () => dispatch => {
    const successMessage = 'Results fetch successful';
    dispatch(fetchMoviesBegin());
    apiRequest({
        url: `discover/movie?api_key=${Constants.MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    }).then(res => {
        if (Constants.SUCCESS_HTTP_CODES.indexOf(res.status) > -1) {
            dispatch(fetchMoviesSuccess(res.data.results, successMessage));
        } else {
            dispatch(fetchMoviesFailure());
        }
    }).catch(err => {
        dispatch(fetchMoviesFailure(err.message))
    })
}

function fetchMoviesBegin() {
    return {
        type: actionConstants.FETCH_MOVIES_BEGIN
    }
}

function fetchMoviesSuccess(movies, successMessage) {
    return {
        type: actionConstants.FETCH_MOVIES_SUCCESS,
        payload: {
            movies,
            message: successMessage
        }
    }
}

function fetchMoviesFailure(error) {
    return {
        type: actionConstants.FETCH_MOVIES_FAILURE,
        payload: error
    }
}