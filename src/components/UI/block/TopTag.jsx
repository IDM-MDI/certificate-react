import React from 'react';
import classes from './Block.module.css'
import Text from "../text/Text";
import DefaultImage from "../list/img/istockphoto-1335934273-640x640.jpg";
import { useNavigate } from 'react-router-dom' ;

const TopTag = ({data,...props}) => {
    const navigate = useNavigate();
    if(data === null) return;

    const image = data.haveImage === false ?
        DefaultImage
        :
        data._links.self.href + '/img'

    return (
        <div className={classes.tagTopItem} onDoubleClick={() => navigate(`/tags/${data.id}`)}>
            <img src={image} alt="" className={classes.tagTopImg}/>
            <div className={classes.tagTopText}>
                <Text fSize={24}>{data.name}</Text>
            </div>
        </div>
    );
};

export default TopTag;