import React from 'react';
import classes from "./Svg.module.css";
import VkLogo from "./img/iconfinder-vk-4661619_122495.svg";
import Text from "../text/Text";

const VK = () => {
    return (
        <a href={'https://www.vk.com'}>
            <div className={classes.svgIcon}>
                <img src={VkLogo} height={48} width={48} alt=""/>
                <Text fSize={15} bold={true}>VK</Text>
            </div>
        </a>
    );
};

export default VK;