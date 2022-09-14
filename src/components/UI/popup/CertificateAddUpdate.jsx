import React, {useContext, useState, useRef, useEffect} from 'react';
import Popup from "./Popup";
import {Context} from "../context/context";
import NoImage from "../list/img/noImage.png";
import classes from './Popup.module.css'
import Text from "../text/Text";
import BuyDeleteButton from "../button/BuyDeleteButton";
import DescriptionInput from "../input/DescriptionInput";
import UnderLineInput from "../input/UnderLineInput";
import classnames from "classnames";
import {isTagsEmpty} from "../validator/EntityValidator";

const EMPTY_VALUE = {
    name: '',
    shop: '',
    price: 0,
    description: '',
    mainImage: NoImage,
    secondImage: NoImage,
    thirdImage: NoImage,
    tags: []
}

function updateValue(updateCertificate,setCertificate) {
    if(!updateCertificate) {
        return;
    }
    setCertificate({
        name: updateCertificate.name ? updateCertificate.name : '',
        shop: updateCertificate.shop ? updateCertificate.shop : '',
        price: updateCertificate.price ? updateCertificate.price : 0,
        description: updateCertificate.description ? updateCertificate.description : '',
        mainImage : updateCertificate.haveMainImage === false? NoImage
            :
            updateCertificate._links.self.href + '/img?name=main',
        secondImage : updateCertificate.haveSecondImage === false? NoImage
            :
            updateCertificate._links.self.href + '/img?name=second',
        thirdImage : updateCertificate.haveThirdImage === false? NoImage
            :
            updateCertificate._links.self.href + '/img?name=third',
        tags: isTagsEmpty(updateCertificate.tags) ? [] : updateCertificate.tags
    })
}

const CertificateAddUpdate = ({...props}) => {
    const context = useContext(Context);
    const[
            isAddUpdateCertificateVisible,
            setAddUpdateCertificateVisible,
            updateCertificate,
            setUpdateCertificate] =
        [
            context.isAddUpdateCertificateVisible,
            context.setAddUpdateCertificateVisible,
            context.updateCertificate,
            context.setUpdateCertificate]

    const[certificate,setCertificate] = useState(EMPTY_VALUE)

    useEffect(() => {
        updateValue(updateCertificate,setCertificate)
    },[updateCertificate])

    useEffect(() => {
        if(!isAddUpdateCertificateVisible) {
            setCertificate(EMPTY_VALUE)
            setUpdateCertificate(null)
        }
    },[isAddUpdateCertificateVisible])

    const isEmpty = updateCertificate === null;

    return (
        <Popup
            isVisible={isAddUpdateCertificateVisible}
            setVisible={setAddUpdateCertificateVisible}
            blockClass={classes.certificateBlock}>
            <Title
                isEmpty={isEmpty}
                context={context}
                certificate={certificate}
                setCertificate={setCertificate}
            />
            <Content
                isEmpty={isEmpty}
                certificate={certificate}
                setCertificate={setCertificate}
            />
            <Images
                certificate={certificate}
                setCertificate={setCertificate}
            />
        </Popup>
    );
};

export default CertificateAddUpdate;


function Title({context,isEmpty,certificate,setCertificate,...props}) {
    function changeName(value) {
        setCertificate(param => ({
            ...param,
            name: value
        }))
    }

    function changePrice(value) {
        setCertificate(param => ({
            ...param,
            price: value
        }))
    }

    const titleName = isEmpty ? 'ADD' : 'UPDATE'
    return (
        <div className={classes.certificateTitle}>
            <div className={classes.certificateName}>
                <UnderLineInput
                    style={{
                    textAlign: 'left'
                    }}
                    value={certificate.name}
                    onChangeSet={changeName}
                    placeholder={'Enter name'}/>
            </div>
            <div className={classes.certificateOrder}>
                <UnderLineInput
                    placeholder={'Enter price'}
                    value={certificate.price}
                    onChangeSet={changePrice}
                    type={'number'} />
                <BuyDeleteButton color={'green'} onClick={() => {
                }}>
                    {titleName + ' CERTIFICATE'}
                </BuyDeleteButton>
            </div>
        </div>
    );
}

function Content({certificate,setCertificate,...props}) {
    function changeShop(value) {
        setCertificate(param => ({
        ...param,
        shop: value
        }))
    }

    function changeDescription(value) {
        setCertificate(param => ({
            ...param,
            description: value
        }))
    }


    return (
        <div className={classes.certificateContent}>
            <div className={classes.certificateShopAndTags}>
                <div className={classes.certificateShop}>
                    <Text fSize={32}>Shop</Text>
                    <div className={classes.certificateShopAndTagSize}>
                        <UnderLineInput
                            value={certificate.shop}
                            onChangeSet={changeShop}
                            placeholder={'Enter shop'}/>
                    </div>
                </div>
                <div className={classes.certificateTags}>
                    <Text fSize={32}>Tags</Text>
                    <Text fSize={24}>There are some text</Text>
                </div>
            </div>
            <DescriptionInput
                value={certificate.description}
                onChangeSet={changeDescription}
                placeholder={'Enter description'}
            />
        </div>
    );
}

function Images({certificate,setCertificate,...props}) {
    const [selectedImage,setSelectedImage] = useState(certificate.mainImage);
    const inputFileMain = useRef(null)
    const inputFileSecond = useRef(null)
    const inputFileThird = useRef(null)

    return (
        <div className={classes.certificateImages}>
            <div className={classes.certificateSmallImages}>
                <input
                    type="file"
                    ref={inputFileMain}
                    accept={'image/*'}
                    onChange={event => setCertificate(param => ({
                        ...param,
                        mainImage: URL.createObjectURL(event.target.files[0])
                    }))}
                    hidden
                />
                <input
                    type="file"
                    ref={inputFileSecond}
                    accept={'image/*'}
                    onChange={event => setCertificate(param => ({
                        ...param,
                        secondImage: URL.createObjectURL(event.target.files[0])
                    }))}
                    hidden
                />
                <input
                    type="file"
                    ref={inputFileThird}
                    accept={'image/*'}
                    onChange={event => setCertificate(param => ({
                        ...param,
                        thirdImage: URL.createObjectURL(event.target.files[0])
                    }))}
                    hidden
                />
                <img src={certificate.mainImage}
                     alt=""
                     className={classes.certificateSmallImage}
                     onClick={() => {
                         inputFileMain.current.click()
                     }}/>
                <img src={certificate.secondImage}
                     alt=""
                     className={classes.certificateSmallImage}
                     onClick={() => {
                         inputFileSecond.current.click()
                     }}/>
                <img src={certificate.thirdImage}
                     alt=""
                     className={classes.certificateSmallImage}
                     onClick={() => {
                         inputFileThird.current.click()
                     }}/>
            </div>
            <img src={selectedImage}
                 alt=""
                 className={classnames(classes.certificateBigImage,classes.pointer)}
                 onClick={() => {
                     setSelectedImage(
                         selectedImage === certificate.mainImage ?
                             certificate.secondImage :
                             selectedImage === certificate.secondImage ?
                             certificate.thirdImage : certificate.mainImage
                     )
                 }}/>
        </div>
    );
}