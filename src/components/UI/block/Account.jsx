import React, {useContext} from 'react';
import {Context} from "../context/context";
import Text from "../text/Text";
import classes from './Block.module.css'
import Arrow from "../svg/Arrow";
import UnderLine from "../text/UnderLine";
import classnames from "classnames";

const Account = ({children,setVisible,...props}) => {
    return (
        <div className={classnames(classes.accountInfo,classes.cursorPointer)} onClick={setVisible}>
            <div className={classes.accountText}>
                <Text>
                    {children.username}
                </Text>
                <UnderLine color={'green'} width={120}></UnderLine>
            </div>
        </div>
    );
};

export default Account;