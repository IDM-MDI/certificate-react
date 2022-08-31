import React from 'react';
import FacebookLogo from './img/facebook_icon-icons.com_59205.svg'
import classes from './Svg.module.css'
import Text from "../text/Text";

const Facebook = () => {
    return (
        <a href={'https://facebook.com/'}>
            <div className={classes.svgIcon}>
                <img src={FacebookLogo} height={48} width={48} alt=""/>
                <Text fSize={15} bold={true}>Facebook</Text>
            </div>
        </a>
    );
};

export default Facebook;