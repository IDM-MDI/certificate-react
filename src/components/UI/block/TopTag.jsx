import React from 'react';
import classes from './Block.module.css'
import Text from "../text/Text";
import DefaultImage from "../list/img/istockphoto-1335934273-640x640.jpg";
import { useNavigate } from 'react-router-dom' ;

const TopTag = ({children,...props}) => {
    const navigate = useNavigate();
    if(!children) return;

    const image = children.haveImage === false ?
        DefaultImage
        :
        children._links.self.href + '/img'

    return (
        <div className={classes.tagTopItem} onDoubleClick={() => navigate(`/tags/${children.id}`)}>
            <img src={image} alt="" className={classes.tagTopImg}/>
            <div className={classes.tagTopText}>
                <Text fSize={24}>{children.name}</Text>
            </div>
        </div>
    );
};

export default TopTag;