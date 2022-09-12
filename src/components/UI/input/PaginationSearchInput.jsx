import React, {useState} from 'react';
import UnderLineInput from "./UnderLineInput";

const PaginationSearchInput = ({setInput,type,...props}) => {
    const [searchInput,setSearchInput] = useState(0)

    return (
        <UnderLineInput
            type={'Number'}
            onChange={event => {
                setSearchInput(event.target.value);
            }}
            onKeyDown={event => {
                if(event.key === 'Enter') {
                    setInput(param => ({
                        ...param,
                        pageNumber: searchInput - 1
                    }));
                }
            }}/>
    );
};

export default PaginationSearchInput;