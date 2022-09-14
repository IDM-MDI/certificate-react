import React, {useContext, useRef, useState} from 'react';
import {Context} from "../context/context";
import classes from './Popup.module.css'
import Text from "../text/Text";
import BuyDeleteButton from "../button/BuyDeleteButton";
import NoImage from '../list/img/noImage.png'
import EntityInput from "../input/EntityInput";
import Popup from "./Popup";


const EMPTY_TAG = {
    name: '',
    image: NoImage
}

const TagAddUpdate = ({...props}) => {
    const context = useContext(Context);
    const[tag,setTag] = useState(EMPTY_TAG)
    const[isAddUpdateTagVisible,
        setAddUpdateTagVisible,
        updateTag,
        setUpdateTag] =
        [context.isAddUpdateTagVisible,
         context.setAddUpdateTagVisible,
         context.updateTag,
         context.setUpdateTag]

    const titleName = updateTag ? 'UPDATE' : 'ADD'

    return (
        <Popup isVisible={isAddUpdateTagVisible}
               setVisible={setAddUpdateTagVisible}
               blockClass={classes.addTagBlock}>
            <Title titleName={titleName}/>
            <Content tag={tag} setTag={setTag} />
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

function Content({tag,setTag}) {
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
                    onChange={event => setTag(URL.createObjectURL(event.target.files[0]))}
                    hidden
                />
            </div>
            <div>
                <div className={classes.addTagImageTitle}>
                    <Text>SELECT IMAGE</Text>
                    <div className={classes.addTagImageClear}
                         onClick={() => setTag(param => ({
                             ...param,
                             image: NoImage
                         }))}>
                        <Text>CLEAR</Text>
                    </div>
                </div>
                <img
                    onClick={() => {
                        inputFile.current.click()
                    }}
                    className={classes.addTagImage}
                    src={tag.image}
                    alt=""
                />
            </div>
        </div>
    );
}