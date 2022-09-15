import React, {useContext} from 'react';
import classes from "./Block.module.css";
import Text from "../text/Text";
import TopTag from "./TopTag";
import Remove from "../svg/Remove";
import Edit from "../svg/Edit";
import {Context} from "../context/context";

const ChosenTag = ({children,...props}) => {
    const context = useContext(Context);

    const[setUpdateTag,
        setAddUpdateTagVisible] = [
        context.setUpdateTag,
        context.setAddUpdateTagVisible]


    return (
        <div className={classes.chosenBlock}>
            <div className={classes.topTitle}>
                <Edit byAdmin={true} onClick={() => {
                    setUpdateTag(children)
                    setAddUpdateTagVisible(true)
                }}/>
                <Text  fSize={36}>
                    Chosen Tag
                </Text>
                <Remove byAdmin={true}/>
            </div>
            <TopTag>{children}</TopTag>
        </div>
    );
};

export default ChosenTag;