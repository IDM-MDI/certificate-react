import React,{useEffect, useState} from 'react';
import classes from './AuthInput.module.css'

const EntityInput = ({value,placeholder,onChangeSet,...props}) => {
    const[inputValue,setInputValue] = useState(value)
    useEffect(() => {
        setInputValue(value)
    },[value])

    return (
        <input
            className={classes.entityInput}
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            onBlur={() => onChangeSet(inputValue)}
            placeholder={placeholder}
            {...props}>
        </input>
    );
};

export default EntityInput;