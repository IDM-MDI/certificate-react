import React, {useState} from 'react';
import Account from "./Account";
import AccountMenu from "./AccountMenu";
import classes from './Block.module.css'

const AccountHeader = ({children,...props}) => {
    const [visible,setVisible] = useState(false)

    function clickVisible() {
        setVisible(!visible)
    }

    return (
        <div className={classes.accountBlock}>
            <Account setVisible={clickVisible}>{children}</Account>
            <AccountMenu visible={visible}></AccountMenu>
        </div>
    );
};

export default AccountHeader;