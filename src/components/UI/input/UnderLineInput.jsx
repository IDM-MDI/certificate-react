import React, {useEffect, useRef, useState} from 'react';
import classes from "./AuthInput.module.css";

const UnderLineInput = ({value,placeholder,onChangeSet,...props}) => {
    const[inputValue,setInputValue] = useState(value)
    useEffect(() => {
        setInputValue(value)
    },[value])

    return (
        <input
            className={classes.search}
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            onBlur={() => onChangeSet(inputValue)}
            placeholder={placeholder}
            {...props}
        />
    );
};

export default UnderLineInput;