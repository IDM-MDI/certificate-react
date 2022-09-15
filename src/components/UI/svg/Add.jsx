import React,{useContext} from 'react';
import Plus from './img/plus-48.svg'
import classes from './Svg.module.css'
import {Context} from "../context/context";
import {isNotAdmin} from "../validator/EntityValidator";

const Add = ({byAdmin,onClick}) => {
    const context = useContext(Context);

    if(byAdmin && isNotAdmin(context.auth)) {
        return;
    }
    return (
        <div className={classes.svg} onClick={onClick}>
            <img src={Plus}
                 alt="Accept-button"/>
        </div>
    );
};

export default Add;