import React from 'react';
import classes from './List.module.css'
import Text from "../text/Text";
import DefaultImage from './img/noImage.png'

const TagByCertificate = ({children}) => {
    const image = children.haveImage === false ?
        DefaultImage
        :
        children._links.self.href + '/img'

    return (
        <div className={classes.tagByCertificate}>
            <img src={image}
                 alt=""
                 className={classes.tagByCertificateImage}/>
            <Text>{children.name}</Text>
        </div>
    );
};

export default TagByCertificate;