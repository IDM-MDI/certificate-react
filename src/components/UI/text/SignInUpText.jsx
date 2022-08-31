import React from 'react';
import classes from './Text.module.css'
import Text from "./Text";
import UnderLine from "./UnderLine";
import classnames from "classnames";


const SignInUpText = ({signIn,setSignIn,...props}) => {
    return (
        <div className={classes.signInUpBlock}>
            <div className={classnames(classes.flexCenter,classes.flexColumn,classes.cursorPointer)} onClick={() => setSignIn(true)}>
                <Text fSize={31} color={'white'}>
                    Sign in
                </Text>
                <UnderLine width={80} color={signIn === true ? 'green' : 'pink'}/>
            </div>
            <div className={classnames(classes.flexCenter,classes.flexColumn,classes.cursorPointer)} onClick={() => setSignIn(false)}>
                <Text fSize={31} color={'white'}>
                    Sign up
                </Text>
                <UnderLine width={80} color={signIn === true ? 'pink' : 'green'}/>
            </div>
        </div>
    );
};

export default SignInUpText;