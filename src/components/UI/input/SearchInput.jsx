import React from 'react';
import classes from "./AuthInput.module.css";

const SearchInput = (props) => {
    return (
        <input
            className={classes.search}
            {...props}
        />
    );
};

export default SearchInput;