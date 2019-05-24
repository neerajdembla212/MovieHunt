import { combineReducers } from 'redux';
import { movieListingReducer } from './components/MovieListing/reducer';

export default combineReducers({
    movieListing: movieListingReducer
})