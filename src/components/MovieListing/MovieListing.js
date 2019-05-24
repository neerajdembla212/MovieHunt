import React, { useEffect } from 'react';
import Typography from '../UI/Typography/Typography';
import { connect } from 'react-redux';
import * as actionCreators from './actions';

const MovieListing = props => {
    useEffect(() => {
        props.fetchMovies();
    }, [])
    const moviesGrid = props.movies && props.movies.map(movie => {
        return <img src={`https://image.tmdb.org/t/p/w500_and_h282_face${movie.poster_path}`} />
    });
    return (
        <>
            <Typography>Top Rated Movies</Typography>
            {moviesGrid}
        </>
    )
}

const mapStateToProps = state => ({
    movies: state.movieListing.movies
});
const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(actionCreators.fetchMovies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieListing);