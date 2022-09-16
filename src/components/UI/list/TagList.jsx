import React, {useEffect, useState} from 'react';
import classes from "./List.module.css";
import Text from "../text/Text";
import Tag from "./Tag";


const TagList = ({data,reload,...props}) => {
    const [listTag,setTags] = useState(
        <div onClick={reload} className={classes.reloadText}>
            <Text fSize={36} color={'pink'}>
                There are nothing find, click on me to reload
            </Text>
        </div>
    )

    useEffect(()=> {
        getListByData()
    },[data])

    function getListByData() {
        let result = [];
        if(data === null || data.content === null) {
            return;
        }

        for (let i = 0; i < data.content.length; i++) {
            if(i + 1 % 3 === 0) {
                result += <div className={classes.nextLine}/>
            }
            result[i] = <Tag key={data.content[i].id}>{data.content[i]}</Tag>
        }
        setTags(result);
    }

    return (
        <div className={classes.tagItems}>
            {listTag}
        </div>
    );
};

export default TagList;