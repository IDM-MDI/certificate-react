import React from 'react';
import classes from './styles/main.module.css'
import Text from "./text/Text";
import Facebook from "./svg/Facebook";
import Instagram from "./svg/Instagram";
import VK from "./svg/VK";
import Twitter from "./svg/Twitter";
import LinkedIn from "./svg/LinkedIn";
import Telegram from "./svg/Telegram";



const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerIcons}>
                <Telegram />
                <LinkedIn />
                <VK />
            </div>
            <Text fSize={36}>SKY</Text>
            <div className={classes.footerIcons}>
                <Facebook />
                <Instagram />
                <Twitter />
            </div>
        </div>
    );
};

export default Footer;