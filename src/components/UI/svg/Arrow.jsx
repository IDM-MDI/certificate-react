import React from 'react';
import classes from "./Svg.module.css";
import ArrowSvg from './img/right_arrow.svg'
import classnames from "classnames";

function arrowDirection(direction) {
    switch (direction) {
        case 'left' : return classes.leftArrow;
        case 'right' : return classes.rightArrow;
        case 'up' : return classes.upArrow;
        case 'down' : return classes.downArrow;
        default : return classes.rightArrow;
    }
}

const Arrow = ({direction,height,width,onClick,...props}) => {
    direction = arrowDirection(direction);

    return (
        <div onClick={onClick}>
            <img src={ArrowSvg} alt="" style={
                {
                    height: height,
                    width: width
                }
            } className={classnames(direction,classes.cursorPointer)}/>
        </div>
    );
};

export default Arrow;