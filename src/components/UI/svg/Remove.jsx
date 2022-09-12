import React from 'react';
import classes from "./Svg.module.css";
import Delete from "./img/delete-icon-100x100.svg";

const Remove = ({onClick}) => {
    return (
        <div className={classes.svg} onClick={onClick}>
            <img src={Delete}
                 width={'48px'}
                 height={'48px'}
                 alt="Accept-button"/>
        </div>
    );
};

export default Remove;