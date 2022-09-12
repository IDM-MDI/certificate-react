import React, {useContext, useRef, useState} from 'react';
import {Context} from "../context/context";
import classes from './Popup.module.css'
import Text from "../text/Text";
import BuyDeleteButton from "../button/BuyDeleteButton";
import NoImage from '../list/img/noImage.png'
import EntityInput from "../input/EntityInput";
import Popup from "./Popup";


const TagAddUpdate = ({children,...props}) => {
    const context = useContext(Context);
    const[image,setImage] = useState(NoImage)
    const[isAddTagVisible,setAddTagVisible] = [context.isAddTagVisible,context.setAddTagVisible]

    const titleName = children ? 'UPDATE' : 'ADD'

    return (
        <Popup isVisible={isAddTagVisible}
               setVisible={setAddTagVisible}
               blockClass={classes.addTagBlock}>
            <Title titleName={titleName}/>
            <Content image={image} setImage={setImage} />
        </Popup>
    );
};
export default TagAddUpdate;

function Title({titleName}) {
    return (
        <div className={classes.addTagTitle}>
            <Text fSize={36}>{titleName + ' TAG'}</Text>
            <BuyDeleteButton color={'green'}>
                {titleName}
            </BuyDeleteButton>
        </div>
    );
}

function Content({image,setImage}) {
    const inputFile = useRef(null)
    return (
        <div className={classes.addTagContent}>
            <div>
                <Text>NAME</Text>
                <EntityInput
                    onChange={() => {

                    }}
                    type={'text'}
                />
                <input
                    type="file"
                    ref={inputFile}
                    accept={'image/*'}
                    onChange={event => setImage(URL.createObjectURL(event.target.files[0]))}
                    hidden
                />
            </div>
            <div>
                <div className={classes.addTagImageTitle}>
                    <Text>SELECT IMAGE</Text>
                    <div className={classes.addTagImageClear}
                         onClick={() => setImage(NoImage)}>
                        <Text>CLEAR</Text>
                    </div>
                </div>
                <img
                    onClick={() => {
                        inputFile.current.click()
                    }}
                    className={classes.addTagImage}
                    src={image}
                    alt=""
                />
            </div>
        </div>
    );
}