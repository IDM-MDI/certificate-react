import React from 'react';
import classes from "./Button.module.css";

const SignInButton = ({onClick,children}) => {
    return (
        <button className={classes.signBtn} onClick={onClick}>
            {children}
        </button>
    );
};

export default SignInButton;