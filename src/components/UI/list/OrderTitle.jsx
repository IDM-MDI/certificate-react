import React from 'react';
import classes from "./List.module.css";
import Text from "../text/Text";
import UnderLine from "../text/UnderLine";

const OrderTitle = () => {
    return (
        <div className={classes.listTitle}>
            <Text fSize={36}>Orders</Text>
            <UnderLine color={'green'} width={1800}></UnderLine>
        </div>
    );
};

export default OrderTitle;