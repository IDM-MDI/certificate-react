import React from 'react';
import classes from './Button.module.css'
import classnames from "classnames";
import Text from "../text/Text";

function colorValidator(color) {
    return color === 'pink' ? classes.pinkBackground : classes.greenBackground;
}

const BuyDeleteButton = ({color,onClick,children,...props}) => {
    color = colorValidator(color)

    return (
        <div onClick={onClick} className={classnames(color,classes.buyDeleteButton)}>
            <Text>{children}</Text>
        </div>
    );
};

export default BuyDeleteButton;