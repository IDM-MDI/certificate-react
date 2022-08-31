import React from 'react';
import classes from './Text.module.css'
import classnames from 'classnames';

function fontSizeValidator(fSize) {
    switch (fSize) {
        case 64 : return classes.f64;
        case 36 : return classes.f36;
        case 32 : return classes.f32;
        case 24 : return classes.f24;
        case 20 : return classes.f20;
        case 15 : return classes.f15;
        default : return classes.f24;
    }
}

function colorValidator(color) {
    switch (color) {
        case 'white' : return classes.white;
        case 'pink' : return classes.pink;
        case 'green' : return classes.green;

        default : return classes.white;
    }
}

function boldValidator(bold) {
    return bold === true ? classes.bold : classes.normal;
}

const Text = ({children,fSize,color,bold,...props}) => {
    if(children === null) return;
    const font = classes.fontInit;
    fSize = fontSizeValidator(fSize);
    color = colorValidator(color);
    bold = boldValidator(bold);

    return (
        <div className={classnames(font,fSize,color,bold)}>
            {children.toString().toUpperCase()}
        </div>
    );
};

export default Text;