import React, {useState,useEffect} from 'react';
import classes from './Block.module.css'
import Text from "../text/Text";
import {fetchEntity} from "../API/FetchService";
import TagSlider from "../slider/TagSlider";

const TOP_TAG_URL = 'http://localhost:8080/api/v1/tags/top';

const Top = (props) => {
    const [data,setData] = useState(null);

    useEffect(() => {
        fetchEntity(TOP_TAG_URL)
            .then(response => {
                setData(response.data)
            })
    },[])

    return (
        <div className={classes.topBlock}>
            <div className={classes.topTitle}>
                <Text  fSize={36}>
                    Top tags
                </Text>
            </div>
            <TagSlider data={data} />
        </div>
    );
};

export default Top;