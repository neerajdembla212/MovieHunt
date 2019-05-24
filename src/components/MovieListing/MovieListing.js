import React, { useEffect } from 'react';
import Typography from '../UI/Typography/Typography';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import Image from '../UI/Image/Image';
import * as Utils from '../../utils/Utils';
import Movie from './Movie/Movie';
import Classes from './MovieListing.module.scss';
import Notification from '../UI/Notification/Notification';
const MovieListing = props => {
    useEffect(() => {
        props.fetchMovies();
    }, [])
    console.log('movues ', props.movies);
    const moviesGrid = props.movies && props.movies.map(movie => {
        return <Movie key={Utils.generateID()} {...movie} />
    });
    return (
        <>
            <Typography className={Classes.Title}>Top Rated Movies</Typography>
            <div className={Classes.grid}>
                {moviesGrid}
            </div>
            <Notification type={props.notification} message={props.message} />
        </>
    )
}

const mapStateToProps = state => ({
    movies: state.movieListing.movies,
    notification: state.movieListing.notification,
    message: state.movieListing.message
});
const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(actionCreators.fetchMovies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieListing);