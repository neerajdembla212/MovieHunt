import React from 'react';

const Image = props => {
    const baseUrl = props.baseUrl ? props.baseUrl : '';
    return <img src={`${baseUrl}/${props.source}`} alt="movie poster" {...props} />;
}

export default Image;