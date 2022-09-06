import React from 'react';
import AcceptImage from './img/accept.svg'
import classes from './Svg.module.css'

const Accept = ({onClick}) => {
    return (
        <div className={classes.svg} onClick={onClick}>
            <img src={AcceptImage} alt="Accept-button"/>
        </div>
    );
};

export default Accept;