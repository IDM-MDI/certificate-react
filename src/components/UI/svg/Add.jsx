import React from 'react';
import Plus from './img/plus-48.svg'
import classes from './Svg.module.css'

const Add = ({onClick}) => {
    return (
        <div className={classes.svg} onClick={onClick}>
            <img src={Plus}
                 alt="Accept-button"/>
        </div>
    );
};

export default Add;