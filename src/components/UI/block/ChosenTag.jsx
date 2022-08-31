import React from 'react';
import classes from "./Block.module.css";
import Text from "../text/Text";
import TopTag from "./TopTag";

const ChosenTag = ({data,...props}) => {
    return (
        <div className={classes.chosenBlock}>
            <div className={classes.topTitle}>
                <Text  fSize={36}>
                    Chosen Tag
                </Text>
            </div>
            <TopTag data={data}></TopTag>
        </div>
    );
};

export default ChosenTag;