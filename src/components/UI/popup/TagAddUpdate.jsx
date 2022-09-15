import React, {useContext, useRef, useState,useEffect} from 'react';
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

function updateValue(updateTag,setTag) {
    if(!updateTag) {
        return;
    }
    setTag({
        name: updateTag.name ? updateTag.name : '',
        image: updateTag.haveMainImage === false? NoImage
            :
            updateTag._links.self.href + '/img?name=main',
    })
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


    useEffect(() => {
        updateValue(updateTag,setTag)
    },[updateTag])

    useEffect(() => {
        if(!isAddUpdateTagVisible) {
            setTag(EMPTY_TAG)
            setUpdateTag(null)
        }
    },[isAddUpdateTagVisible])

    const isEmpty = updateTag === null;

    return (
        <Popup isVisible={isAddUpdateTagVisible}
               setVisible={setAddUpdateTagVisible}
               blockClass={classes.addTagBlock}>
            <Title isEmpty={isEmpty}/>
            <Content tag={tag} setTag={setTag} />
        </Popup>
    );
};
export default TagAddUpdate;

function Title({isEmpty}) {
    const titleName = isEmpty ? 'ADD' : 'UPDATE'
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

    function changeName(value) {
        setTag(param => ({
            ...param,
            name: value
        }))
    }

    return (
        <div className={classes.addTagContent}>
            <div>
                <Text>NAME</Text>
                <EntityInput
                    value={tag.name}
                    onChangeSet={changeName}
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