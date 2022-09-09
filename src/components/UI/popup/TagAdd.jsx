import React, {useContext, useRef, useState} from 'react';
import {Context} from "../context/context";
import {isPopupActive} from "../validator/PopupValidator";
import classes from './Popup.module.css'
import Text from "../text/Text";
import BuyDeleteButton from "../button/BuyDeleteButton";
import NoImage from '../list/img/noImage.png'
import EntityInput from "../input/EntityInput";


const TagAdd = () => {
    const context = useContext(Context);
    const[image,setImage] = useState(NoImage)
    const[isAddTagVisible,setAddTagVisible] = [context.isAddTagVisible,context.setAddTagVisible]

    return (
        <div className={isPopupActive(isAddTagVisible)}
             onClick={() => setAddTagVisible(false)}>
            <div className={classes.addTagBlock} onClick={(e) => e.stopPropagation()}>
                <Title />
                <Content image={image} setImage={setImage} />
            </div>
        </div>
    );
};
export default TagAdd;

function Title() {
    return (
        <div className={classes.addTagTitle}>
            <Text fSize={36}>ADD TAG</Text>
            <BuyDeleteButton color={'green'}>
                ADD
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