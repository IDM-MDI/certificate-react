import React from 'react';
import classes from './Svg.module.css'
import Text from "../text/Text";

const Moon = () => {
    return (
        <a href={'/'}>
        <div className={classes.moon}>
            <div className={classes.moonText}>
                <Text fSize={64}>SKY</Text>
            </div>
        </div>
        </a>
    );
};

export default Moon;