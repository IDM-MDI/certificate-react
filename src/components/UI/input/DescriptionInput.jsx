import React from 'react';
import classes from './AuthInput.module.css'

const DescriptionInput = (props) => {
    return (
        <textarea
            className={classes.descriptionInput}
            {...props}>
        </textarea>
    );
};

export default DescriptionInput;