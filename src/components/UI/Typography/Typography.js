import React from 'react';
const cn = require('classnames');

const Typography = props => {

    const classes = cn('Typography');
    if (props.condition === false || !props.children) {
        return <p className={classes} style={props.style} >NA</p>;
    }
    return (
        <p className={classes} style={props.style} >{props.children}</p>
    )
}

export default Typography;