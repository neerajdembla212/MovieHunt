import * as actionConstants from './constants';

const initialState = {
    movies: []
}

export function movieListingReducer(state = initialState, action) {

    switch (action.type) {
        case actionConstants.FETCH_MOVIES_BEGIN: return fetchMoviesBegin(state);
        case actionConstants.FETCH_MOVIES_SUCCESS: return fetchMoviesSuccess(state, action);
        case actionConstants.FETCH_MOVIES_FAILURE: return fetchMoviesFailure(state, action);
        default: return state;
    }
}

function fetchMoviesBegin(state) {
    return {
        ...state,
        moviesFetching: true
    }
}
function fetchMoviesSuccess(state, action) {
    return {
        ...state,
        movies: action.payload.movies,
        moviesFetching: false,
        notification: 'success',
        message: action.payload.message
    }
}
function fetchMoviesFailure(state, action) {
    return {
        ...state,
        moviesFetching: false,
        notification: 'error',
        message: action.payload
    }
}