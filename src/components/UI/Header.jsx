import React, {useEffect, useMemo, useState,useContext} from 'react';
import Moon from "./svg/Moon";
import Text from "./text/Text";
import UnderLine from "./text/UnderLine";
import classes from './styles/main.module.css'
import classnames from "classnames";
import {Link, useLocation} from "react-router-dom";
import {Context} from "./context/context";
import AccountHeader from "./block/AccountHeader";

function fillColor(path) {
    let result;
    switch (path) {
        case '/certificates' : result = ['green','pink','pink']; break;
        case '/tags' : result = ['pink','green','pink']; break;
        case '/about' : result = ['pink','pink','green']; break;
        default: result = ['pink','pink','pink'];
    }
    return result;
}


const Header = (props) => {
    const context = useContext(Context);
    const [auth,setAuth] = [context.auth,context.setAuth];
    const [isSignVisible,setSignVisible] = [context.isSignVisible,context.setSignVisible];

    let pathname = useLocation().pathname;
    const color = fillColor(pathname);

    const authenticationBlock = auth === null || auth === undefined ? (
        <div className={classnames(classes.flexCenter,classes.flexColumn,classes.cursorPointer)} onClick={() => setSignVisible(true)}>
            <Text>Sign</Text>
            <UnderLine color={isSignVisible === true ? 'green' : 'pink'} width={62}/>
        </div>
    ) : (
        <AccountHeader>
            {auth}
        </AccountHeader>
    )

    return (
        <div className={classes.header}>
            <div className={classes.groupText}>
                <Link to={'/certificates'}>
                    <div className={classnames(classes.flexCenter,classes.flexColumn)}>
                        <Text>Certificates</Text>
                        <UnderLine color={color[0]} width={159}/>
                    </div>
                </Link>
                <Link to={'/tags'}>
                    <div className={classnames(classes.flexCenter,classes.flexColumn)}>
                        <Text>Tags</Text>
                        <UnderLine color={color[1]} width={62}/>
                    </div>
                </Link>
            </div>
            <Moon />
            <div className={classes.groupText}>
                <Link to={'/about'}>
                    <div className={classnames(classes.flexCenter,classes.flexColumn)}>
                        <Text>About</Text>
                        <UnderLine color={color[2]} width={88}/>
                    </div>
                </Link>
                {authenticationBlock}
            </div>
        </div>
    );
};

export default Header;