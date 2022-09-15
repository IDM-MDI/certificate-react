import React,{useContext} from 'react';
import classes from "./Svg.module.css";
import Delete from "./img/delete-icon-100x100.svg";
import {Context} from "../context/context";
import {isNotAdmin} from "../validator/EntityValidator";

const Remove = ({byAdmin,onClick}) => {
    const context = useContext(Context);
    if(byAdmin && isNotAdmin(context.auth)) {
        return;
    }

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