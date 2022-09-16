import React, {useState} from 'react';
import SearchLogo from "./img/search.svg";
import classes from './Svg.module.css'
import SearchInput from "../input/UnderLineInput";

const Search = ({setSearch,...props}) => {
    const[input,setInput] = useState('')
    return (
        <div className={classes.search}>
            <SearchInput
                type={'text'}
                onChange={event => {
                    setInput(event.target.value);
                }}
                onKeyDown={event => {
                    if(event.key === 'Enter') {
                        setSearch(input);
                    }
                }}/>
            <img
                className={classes.svg}
                onClick={() => {
                    setSearch(input);
                }}
                src={SearchLogo}
                height={48}
                width={48}
                alt=""/>
        </div>
    );
};

export default Search;