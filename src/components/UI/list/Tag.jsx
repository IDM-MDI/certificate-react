import React from 'react';
import classes from './List.module.css'
import Text from "../text/Text";
import DefaultImage from './img/istockphoto-1335934273-640x640.jpg'
import { useNavigate } from 'react-router-dom' ;

const Tag = ({children,...props}) => {
    const navigate = useNavigate();
    if(children === null)   return;
    const name = children.name;
    const image = children.haveImage === false ?
        DefaultImage
        :
        children._links.self.href + '/img'

    return (
        <div className={classes.tagBlock} onClick={() => navigate(`/tags/${children.id}`)}>
            <img src={image} alt="" className={classes.tagImage}/>
            <Text fSize={20}>{name}</Text>
        </div>
    );
};

export default Tag;