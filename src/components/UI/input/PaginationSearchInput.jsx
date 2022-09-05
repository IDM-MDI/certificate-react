import React, {useState} from 'react';
import SearchInput from "./SearchInput";

const PaginationSearchInput = ({setInput,type,...props}) => {
    const [searchInput,setSearchInput] = useState(0)

    return (
        <SearchInput
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