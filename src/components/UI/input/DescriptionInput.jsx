import React, {useState,useEffect} from 'react';
import classes from './AuthInput.module.css'

const DescriptionInput = ({value,placeholder,onChangeSet,...props}) => {
    const[inputValue,setInputValue] = useState(value)
    useEffect(() => {
        setInputValue(value)
    },[value])

    return (
        <textarea
            className={classes.descriptionInput}
            value={inputValue}
            placeholder={placeholder}
            onChange={event => setInputValue(event.target.value)}
            onBlur={() => onChangeSet(inputValue)}
            {...props}>
        </textarea>
    );
};

export default DescriptionInput;