import React, {useState} from 'react';
import classes from './AuthInput.module.css'

const PaginationSearchInput = ({setPage,...props}) => {
    const [input,setInput] = useState(0)

    return (
        <input
            className={classes.searchPagination}
            type="number"
            onChange={event => {
                setInput(event.target.value);
            }}
            onKeyDown={event => {
                if(event.key === 'Enter') {
                    setPage(param => ({
                        ...param,
                        pageNumber: input - 1
                    }));
                }
        }}/>
    );
};

export default PaginationSearchInput;