import React from 'react';
import classes from "./AuthInput.module.css";

const UnderLineInput = ({...props}) => {
    return (
        <input
            className={classes.search}
            {...props}
        />
    );
};

export default UnderLineInput;