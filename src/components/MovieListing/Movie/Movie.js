import React from 'react';
import Classes from './Movie.module.scss';
import Typography from '../../UI/Typography/Typography';
import * as Utils from '../../../utils/Utils';

const imageBaseUrl = "https://image.tmdb.org/t/p/w500_and_h282_face";
const Style = {
    poster: {
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    },
    description: {
        maxHeight: '80px',
        overflowY: 'auto'
    },
    title: {
        fontSize: '24px',
        color: '#ffffff'
    },
    popularity: {
        whiteSpace: 'nowrap',
    }
}
const Movie = props => {
    let popularity = 0;
    if (!isNaN(props.vote_average)) {
        popularity = +props.vote_average * 10;
    }
    return (
        <div className={Classes.Movie}>
            <div className={Classes.poster} style={{ ...Style.poster, backgroundImage: `url(${imageBaseUrl}/${props.poster_path})` }}>

            </div>
            <div className={Classes.MovieData}>
                <div className={Classes.MovieText}>
                    <div className={Classes.Title}>
                        <Typography style={Style.title}>{props.title}</Typography>
                        <Typography style={Style.popularity} className={Classes.Popularity}>{popularity}%</Typography>
                    </div>
                    <Typography>{Utils.formatDate(props.release_date)}</Typography>
                    <Typography style={Style.description}>{props.overview}</Typography>
                </div>
            </div>
        </div>
    )
}

export default Movie;