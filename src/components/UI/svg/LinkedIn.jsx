import React from 'react';
import classes from "./Svg.module.css";
import LinkedinLogo from "./img/linkedin_black_logo_icon_147114.svg";
import Text from "../text/Text";

const LinkedIn = () => {
    return (
        <a href={'https://www.linkedin.com'}>
            <div className={classes.svgIcon}>
                <img src={LinkedinLogo} height={48} width={48} alt=""/>
                <Text fSize={15} bold={true}>Linkedin</Text>
            </div>
        </a>
    );
};

export default LinkedIn;