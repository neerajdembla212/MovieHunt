import React, { useEffect } from 'react';
import Typography from '../UI/Typography/Typography';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import Image from '../UI/Image/Image';
import * as Utils from '../../utils/Utils';
import Movie from './Movie/Movie';
import Classes from './MovieListing.module.scss';

const MovieListing = props => {
    useEffect(() => {
        props.fetchMovies();
    }, [])
    const moviesGrid = props.movies && props.movies.map(movie => {
        return <Movie key={Utils.generateID()} {...movie} />
    });
    return (
        <>
            <Typography>Top Rated Movies</Typography>
            <div className={Classes.grid}>
                {moviesGrid}
            </div>
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