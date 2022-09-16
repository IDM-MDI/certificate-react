import React, {useContext, useMemo, useRef, useState} from 'react';
import SignInUpText from "../text/SignInUpText";
import AuthInput from "../input/AuthInput";
import SignInButton from "../button/SignInButton";
import Text from "../text/Text";
import GoogleOauth from "../svg/GoogleOauth";
import classes from "./Popup.module.css";
import classNames from "classnames";
import {Context} from "../context/context";
import axios from "axios";
import {validatePassword, validateUsername} from "../validator/AuthenticationValidator";

const LOGIN_URL = 'http://localhost:8080/api/v1/login'
const OAUTH_URL = 'http://localhost:8080/api/v1/login/oauth'

const SignIn = ({signIn,setSignIn,...props}) => {
    const context = useContext(Context);
    const[message,setMessage] = [context.message,context.setMessage]
    const[isMessageVisible,setMessageVisible] = [context.isMessageVisible,context.setMessageVisible]
    const setSignVisible = context.setSignVisible

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    function isAuthValid(){
        return validateUsername(username) === 'Valid' && validatePassword(password) === 'Valid';
    }
    async function login() {
        if(!isAuthValid()) {
            setMessage({
                type: 'ERROR',
                message: 'INVALID USERNAME OR PASSWORD'
            })
            setMessageVisible(true)
            return;
        }
        await axios.post(LOGIN_URL,{
            "username" : username,
            "password" : password
        }).then((response)=> {
            context.setAuth(response.data.content[0])
            window.addEventListener('beforeunload',() => {
                localStorage.setItem('auth',JSON.stringify(response.data.content[0]))
            })
            setSignVisible(false)
        });
    }

    function oauth() {
        window.location.href = OAUTH_URL;
    }

    return (
        <div className={classNames(classes.signBlock,classes.signInBlock)}>
            <SignInUpText signIn={signIn} setSignIn={setSignIn}/>
            <AuthInput labelValue={"Username"} name={"username"} validate={validateUsername} onChange={setUsername} type = "text"/>
            <AuthInput labelValue={"Password"} name={"password"} validate={validatePassword} onChange={setPassword} type = "password"/>
            <SignInButton onClick={login}>
                Sign In
            </SignInButton>
            <Text>
                OR
            </Text>
            <GoogleOauth onClick={oauth}/>
        </div>
    );
};

export default SignIn;