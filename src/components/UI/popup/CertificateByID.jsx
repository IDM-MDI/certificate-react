import React, {useContext, useEffect, useState} from 'react';
import classes from "./Popup.module.css";
import Text from "../text/Text";
import DefaultImage from '../list/img/istockphoto-1335934273-640x640.jpg'
import {Context} from "../context/context";
import CustomButton from "../button/CustomButton";
import {addCertificateToOrder} from "../API/OrderService";
import Edit from "../svg/Edit";
import Popup from "./Popup";
import Remove from "../svg/Remove";
import DescriptionInput from "../input/DescriptionInput";
import {isTagsEmpty} from "../validator/EntityValidator";
import TagsByCertificatePopup from "./TagsByCertificatePopup";

const CertificateById = () => {
    const context = useContext(Context);
    const[selectedImage,setSelectedImage] = useState(null)
    const[isTagsByCertificateActive,setTagsByCertificateActive] = useState()

    const [
        certificateByID,
        isCertificateByIDVisible,
        setCertificateByIDVisible,
    ] = [
        context.certificateByID,
        context.isCertificateByIDVisible,
        context.setCertificateByIDVisible,
    ]

    useEffect(()=> {
        if(certificateByID !== null) {
            setSelectedImage(images.mainImage)
            setTagsByCertificateActive(isTagsEmpty(certificateByID.tags) === true ? undefined : false)
        }
    },[certificateByID])

    if(certificateByID === null) return;

    const images = {
        mainImage : certificateByID.haveMainImage === false? DefaultImage
            :
            certificateByID._links.self.href + '/img?name=main',
        secondImage : certificateByID.haveSecondImage === false? DefaultImage
            :
            certificateByID._links.self.href + '/img?name=second',
        thirdImage : certificateByID.haveThirdImage === false? DefaultImage
            :
            certificateByID._links.self.href + '/img?name=third'
    }

    return (
        <Popup
            isVisible={isCertificateByIDVisible}
            setVisible={setCertificateByIDVisible}
            blockClass={classes.certificateBlock}>
            <Title context={context}>{certificateByID}</Title>
            <TagsByCertificatePopup
                active={isTagsByCertificateActive}
                setActive={setTagsByCertificateActive}>
                {certificateByID.tags}
            </TagsByCertificatePopup>
            <Content
                isActive={isTagsByCertificateActive}
                setActive={setTagsByCertificateActive}>
                {certificateByID}
            </Content>
            <Images images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </Popup>
    );
};

function Title({children, context,...props}) {
    const setMessage = context.setMessage;
    const setMessageVisible = context.setMessageVisible;

    const [
        setUpdateCertificate,
        setCertificateByIDVisible,
        setAddUpdateCertificateVisible] =
        [
        context.setUpdateCertificate,
        context.setCertificateByIDVisible,
        context.setAddUpdateCertificateVisible
        ]

    return (
        <div className={classes.certificateTitle}>
            <div className={classes.certificateName}>
                <Text fSize={36}>{children.name}</Text>
                <Edit byAdmin={true} onClick={() => {
                    setUpdateCertificate(children)
                    setCertificateByIDVisible(false)
                    setAddUpdateCertificateVisible(true)
                }}/>
                <Remove byAdmin={true}/>
            </div>
            <div className={classes.certificateOrder}>
                <Text fSize={32}>{children.price + '$'}</Text>
                <CustomButton color={'green'} onClick={() => {
                    addCertificateToOrder(children.id,context)
                    .then(response => {
                        setMessage({
                            type: 'INFO',
                            message: response.data.response.text
                        })
                        setMessageVisible(true)
                    })
                    .catch()
                }}>
                    Add to Card
                </CustomButton>
            </div>
        </div>
    );
}

function Content({children,isActive,setActive}) {
    return (
        <div className={classes.certificateContent}>
            <div className={classes.certificateShopAndTags}>
                <div className={classes.certificateShop}>
                    <Text fSize={32}>Shop</Text>
                    <div className={classes.certificateShopAndTagSize}>
                        <Text fSize={24}>
                            {children.shop}
                        </Text>
                    </div>
                </div>
                <div className={classes.certificateTags}>
                    <Text fSize={32}>Tags</Text>
                    {
                        isActive === undefined ?
                        <Text fSize={24}>No tags found</Text>
                        :
                        <div className={classes.pointer}
                            onClick={() => setActive(true)}>
                            <Text fSize={24}>View tags</Text>
                        </div>
                    }
                </div>
            </div>
            <div className={classes.certificateDescription}>
                <DescriptionInput
                    value={children.description}
                    disabled/>
            </div>
        </div>
    );
}

function Images({images,selectedImage,setSelectedImage}) {
    return (
        <div className={classes.certificateImages}>
            <div className={classes.certificateSmallImages}>
                <img src={images.mainImage} alt="" className={classes.certificateSmallImage} onClick={() => setSelectedImage(images.mainImage)}/>
                <img src={images.secondImage} alt="" className={classes.certificateSmallImage} onClick={() => setSelectedImage(images.secondImage)}/>
                <img src={images.thirdImage} alt="" className={classes.certificateSmallImage} onClick={() => setSelectedImage(images.thirdImage)}/>
            </div>
            <img src={selectedImage} alt="" className={classes.certificateBigImage}/>
        </div>
    );
}

export default CertificateById;