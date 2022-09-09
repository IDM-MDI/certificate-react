import React from 'react';
import classes from './AuthInput.module.css'

const EntityInput = ({...props}) => {
    return (
        <input className={classes.entityInput} {...props}>

        </input>
    );
};

export default EntityInput;