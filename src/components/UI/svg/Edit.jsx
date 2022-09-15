import React,{useContext} from 'react';
import Pencil from './img/pencil.svg'
import classes from './Svg.module.css'
import {isAdmin, isNotAdmin} from "../validator/EntityValidator";
import {Context} from "../context/context";

const Edit = ({byAdmin,onClick}) => {
    const context = useContext(Context);

    if(byAdmin && isNotAdmin(context.auth)) {
        return;
    }

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