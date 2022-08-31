import React from 'react';
import classes from "./Svg.module.css";
import InstagramLogo from "./img/instagram_black_logo_icon_147122.svg";
import Text from "../text/Text";

const Instagram = () => {
    return (
        <a href={'https://instagram.org/'}>
            <div className={classes.svgIcon}>
                <img src={InstagramLogo} height={48} width={48} alt=""/>
                <Text fSize={15} bold={true}>Instagram</Text>
            </div>
        </a>
    );
};

export default Instagram;