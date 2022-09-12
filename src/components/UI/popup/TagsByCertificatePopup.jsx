import React from 'react';
import Popup from "./Popup";
import classes from './Popup.module.css'
import TagsByCertificateList from "../list/TagsByCertificateList";

const TagsByCertificatePopup = ({children,active,setActive,...props}) => {
    return (
        <Popup
            zIndex={10}
            isVisible={active}
            setVisible={setActive}
            blockClass={classes.tagsByCertificateBlock}>
            <TagsByCertificateList>{children}</TagsByCertificateList>
        </Popup>
    );
};

export default TagsByCertificatePopup;