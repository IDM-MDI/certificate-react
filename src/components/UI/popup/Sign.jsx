import React, {useContext, useEffect, useMemo, useState} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import classes from "./Popup.module.css";
import classnames from "classnames";
import { slideInDown } from 'react-animations'
import styled, {keyframes} from "styled-components";
import SignInUpText from "../text/SignInUpText";
import {Context} from "../context/context";

const FadeIn = styled.div`animation: 1s ${keyframes`${slideInDown}`}`;

const Sign = (props) => {
    const context = useContext(Context)
    const [isSignVisible,setSignVisible] = [context.isSignVisible,context.setSignVisible]

    const [sign,setSign] = useState(true)
    const [content,setContent] = useState(<SignIn signIn={sign} setSignIn={setSign}/>);

    useMemo(()=> {
        setContent(sign? <SignIn signIn={sign} setSignIn={setSign}/> : <SignUp signIn={sign} setSignIn={setSign}/>)
    },[sign])

    let cl = classes.popup;

    if(isSignVisible) {
        cl = classnames(cl,classes.active)
    }

    return (
        <div className={cl} onClick={() => setSignVisible(false)}>
            <FadeIn>
                <div className={classes.popupContainer} onClick={(e) => e.stopPropagation()}>
                    {content}
                </div>
            </FadeIn>
        </div>
    );
};

export default Sign;