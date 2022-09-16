import React from 'react';
import classes from './Button.module.css'
import classnames from "classnames";
import Text from "../text/Text";

function colorValidator(color) {
    switch (color) {
        case 'pink': return classes.pinkBackground;
        case 'green': return classes.greenBackground;
        case 'yellow': return classes.yellowBackground;
        default : return classes.greenBackground;
    }
}

const CustomButton = ({color,onClick,children,...props}) => {
    return (
        <div onClick={onClick}
             className={classnames(colorValidator(color),classes.buyDeleteButton)}
             {...props}
        >
            <Text>{children}</Text>
        </div>
    );
};

export default CustomButton;