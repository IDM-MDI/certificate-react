import React from 'react';
import classes from "./Svg.module.css";
import TwitterLogo from "./img/353427-logo-twitter_107479.svg";
import Text from "../text/Text";

const Twitter = () => {
    return (
        <a href={'https://www.twitter.com'}>
            <div className={classes.svgIcon}>
                <img src={TwitterLogo} height={48} width={48} alt=""/>
                <Text fSize={15} bold={true}>Twitter</Text>
            </div>
        </a>
    );
};

export default Twitter;