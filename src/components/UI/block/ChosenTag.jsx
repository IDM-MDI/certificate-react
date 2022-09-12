import React from 'react';
import classes from "./Block.module.css";
import Text from "../text/Text";
import TopTag from "./TopTag";
import Remove from "../svg/Remove";
import Edit from "../svg/Edit";

const ChosenTag = ({data,...props}) => {
    return (
        <div className={classes.chosenBlock}>
            <div className={classes.topTitle}>
                <Edit />
                <Text  fSize={36}>
                    Chosen Tag
                </Text>
                <Remove />
            </div>
            <TopTag data={data}></TopTag>
        </div>
    );
};

export default ChosenTag;