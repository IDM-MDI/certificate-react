import React, {useState} from 'react';
import classNames from "classnames";
import classes from "./Popup.module.css";
import SignInUpText from "../text/SignInUpText";
import AuthInput from "../input/AuthInput";
import SignInButton from "../button/SignInButton";
import Text from "../text/Text";
import {validatePassword, validateUsername} from "../validator/AuthenticationValidator";
import axios from "axios";

const URL = 'http://localhost:8080/api/v1/users'

const SignUp = ({signIn,setSignIn,...props}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    function validate(){
        return validateUsername(username) === 'valid' && validatePassword(password) === 'valid';
    }
    async function registration() {
        const valid = validate();
        if (valid) {
            await axios.post(URL, {
                "username": username,
                "password": password
            }).then((response) => {
                setSignIn(true)
            });
        }
    }

    return (
        <div className={classNames(classes.signBlock,classes.signUpBlock)}>
            <SignInUpText signIn={signIn} setSignIn={setSignIn}/>
            <AuthInput labelValue={"Username"} name={"username"} validate={validateUsername} onChange={setUsername} type = "text"/>
            <AuthInput labelValue={"Password"} name={"password"} validate={validatePassword} onChange={setPassword} type = "password"/>
            <SignInButton onClick={registration}>
                Sign UP
            </SignInButton>
        </div>
    );
};

export default SignUp;