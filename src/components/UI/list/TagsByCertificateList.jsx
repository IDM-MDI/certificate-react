import React from 'react';
import TagByCertificate from "./TagByCertificate";
import classes from './List.module.css'

const TagsByCertificateList = ({children,...props}) => {
    return (
        <div className={classes.tagsByCertificateList}>
            {
                children.map((tag) => {
                    return  <TagByCertificate>
                                {tag}
                            </TagByCertificate>
            })}
        </div>
    );
};

export default TagsByCertificateList;