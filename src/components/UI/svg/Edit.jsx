import React from 'react';
import Pencil from './img/pencil.svg'
import classes from './Svg.module.css'

const Edit = ({onClick}) => {
    return (
        <div className={classes.svg} onClick={onClick}>
            <img
                src={Pencil}
                alt=""
                width={'48px'}
                height={'48px'}/>
        </div>
    );
};

export default Edit;