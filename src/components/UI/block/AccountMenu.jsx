import React,{useContext} from 'react';
import classes from './Block.module.css'
import Text from "../text/Text";
import {Context} from "../context/context";
import {Link} from "react-router-dom";

const AccountMenu = ({visible,...props}) => {
    const context = useContext(Context);
    const [auth,setAuth] = [context.auth,context.setAuth];

    const cl = visible === true ?
        classes.accountMenuActive
        :
        classes.accountMenuBlock
    return (
        <div className={cl}>
            <Link to={'/orders'}>
                <Text fSize={20}>Orders</Text>
            </Link>
            <div className={classes.cursorPointer} onClick={() => {
                visible = false;
                setAuth(null)
                localStorage.setItem('auth', null)
            }}>
                <Text fSize={20}>Sign Out</Text>
            </div>
        </div>
    );
};

export default AccountMenu;