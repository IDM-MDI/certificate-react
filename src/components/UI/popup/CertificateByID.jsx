import React, {useContext, useEffect, useState} from 'react';
import classes from "./Popup.module.css";
import Text from "../text/Text";
import DefaultImage from '../list/img/istockphoto-1335934273-640x640.jpg'
import {Context} from "../context/context";
import BuyDeleteButton from "../button/BuyDeleteButton";
import {addCertificateToOrder} from "../API/OrderService";
import Edit from "../svg/Edit";
import {isPopupActive} from "../validator/PopupValidator";

const CertificateById = (props) => {
    const context = useContext(Context);
    const [
        certificateByID,
        isCertificateByIDVisible,
        setCertificateByIDVisible
    ] = [
        context.certificateByID,
        context.isCertificateByIDVisible,
        context.setCertificateByIDVisible
    ]
    const [selectedImage,setSelectedImage] = useState(null)

    useEffect(()=> {
        if(certificateByID !== null) {
            setSelectedImage(images.mainImage)
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
        <div className={isPopupActive(isCertificateByIDVisible)} onClick={() => setCertificateByIDVisible(false)}>
            <div className={classes.certificateByIdBlock} onClick={(e) => e.stopPropagation()}>
                <Title context={context}>{certificateByID}</Title>
                <Content>{certificateByID}</Content>
                <Images images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            </div>
        </div>
    );
};

function Title({children, context,...props}) {
    return (
        <div className={classes.certificateByIdTitle}>
            <div className={classes.certificateByIdName}>
                <Text fSize={36}>{children.name + ' Certificate'}</Text>
                <Edit />
            </div>
            <div className={classes.certificateByIdOrder}>
                <Text fSize={32}>{children.price + '$'}</Text>
                <BuyDeleteButton color={'green'} onClick={() => {
                    addCertificateToOrder(children.id,context)
                }}>
                    Add to Card
                </BuyDeleteButton>
            </div>
        </div>
    );
}

function Content({children}) {
    return (
        <div className={classes.certificateByIdContent}>
            <div className={classes.certificateByIdShopAndTags}>
                <div className={classes.certificateByIdShop}>
                    <Text fSize={32}>Shop</Text>
                    <div className={classes.certificateByIdShopAndTagSize}>
                        <Text fSize={24}>
                            {children.shop}
                        </Text>
                    </div>
                </div>
                <div className={classes.certificateByIdTags}>
                    <Text fSize={32}>Tags</Text>
                    <Text fSize={24}>There are some text</Text>
                </div>
            </div>
            <div className={classes.certificateByIdDescription}>
                <Text fSize={20}>
                    {children.description}
                </Text>
            </div>
        </div>
    );
}

function Images({images,selectedImage,setSelectedImage}) {
    return (
        <div className={classes.certificateByIdImages}>
            <div className={classes.certificateByIdSmallImages}>
                <img src={images.mainImage} alt="" className={classes.certificateByIdSmallImage} onClick={() => setSelectedImage(images.mainImage)}/>
                <img src={images.secondImage} alt="" className={classes.certificateByIdSmallImage} onClick={() => setSelectedImage(images.secondImage)}/>
                <img src={images.thirdImage} alt="" className={classes.certificateByIdSmallImage} onClick={() => setSelectedImage(images.thirdImage)}/>
            </div>
            <img src={selectedImage} alt="" className={classes.certificateByIdBigImage}/>
        </div>
    );
}

export default CertificateById;