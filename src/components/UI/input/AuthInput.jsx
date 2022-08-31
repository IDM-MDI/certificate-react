import React, {useState} from 'react';
import classes from "./AuthInput.module.css"
import Text from "../text/Text";

const AuthInput = ({labelValue,name,validate,onChange,...props}) => {
    const [text,changeText] = useState('Not valid')
    const [isValid,setValid] = useState(false)

    return (
        <div className={classes.auth}>
            <label className={classes.authLabel} htmlFor={name}>{labelValue}</label>
            <input className={classes.authInput} name={name} onChange={
                (event) => {
                    let value = event.target.value;
                    let valid = validate(value);
                    setValid(valid === 'Valid')
                    changeText(valid)
                    onChange(value)
                }} {...props}/>
            <Text fSize={20} color={isValid ? 'green' : 'pink'}>{text}</Text>
        </div>
    );
};

export default AuthInput;