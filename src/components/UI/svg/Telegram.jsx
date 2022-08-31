import React from 'react';
import classes from "./Svg.module.css";
import TelegramIcon from "./img/telegram_logo_icon_144811.svg";
import Text from "../text/Text";

const Telegram = ({size}) => {
    return (
        <a href={'https://telegram.org/'}>
            <div className={classes.svgIcon}>
                <img src={TelegramIcon} height={48} width={48} alt=""/>
                <Text fSize={15} bold={true}>Telegram</Text>
            </div>
        </a>
    );
};

export default Telegram;