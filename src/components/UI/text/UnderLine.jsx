import React from 'react';
import classes from './Text.module.css'
import classnames from 'classnames';

function colorValidator(color) {
    switch (color) {
        case 'pink' : return classes.underlinePink;
        case 'green' : return classes.underlineGreen;

        default : return classes.underlinePink;
    }
}

function widthValidator(width) {
    return width + 'px'
}

const UnderLine = ({color,width,...props}) => {
    color = colorValidator(color);
    width = widthValidator(width);
    return (
        <div className={classnames(color,width)} style={{
            width: width
        }} />
    );
};

export default UnderLine;