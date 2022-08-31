import React, {useContext, useEffect, useState} from 'react';
import classes from "./Popup.module.css";
import Text from "../text/Text";
import DefaultImage from '../list/img/istockphoto-1335934273-640x640.jpg'
import {Context} from "../context/context";
import BuyDeleteButton from "../button/BuyDeleteButton";
import {addCertificateToOrder} from "../API/OrderService";

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
            setSelectedImage(mainImage)
        }
    },[certificateByID])

    if(certificateByID === null) return;

    const mainImage = certificateByID.haveMainImage === false? DefaultImage
        :
        certificateByID._links.self.href + '/img?name=main';
    const secondImage = certificateByID.haveSecondImage === false? DefaultImage
        :
        certificateByID._links.self.href + '/img?name=second';
    const thirdImage = certificateByID.haveThirdImage === false? DefaultImage
        :
        certificateByID._links.self.href + '/img?name=third';

    let popup = classes.popup;
    let cl = popup;
    if(isCertificateByIDVisible) {
        cl = [popup,classes.active].join(' ');
    }

    return (
        <div className={cl} onClick={() => setCertificateByIDVisible(false)}>
            <div className={classes.certificateByIdBlock} onClick={(e) => e.stopPropagation()}>
                <div className={classes.certificateByIdMainName}>
                    <Text fSize={36}>{certificateByID.name} Certificate</Text>
                    <div className={classes.certificateByIdOrder}>
                        <Text fSize={32}>{certificateByID.price}$</Text>
                        <BuyDeleteButton color={'green'} onClick={() => {
                            addCertificateToOrder(certificateByID.id,context)
                        }}>
                            Add to Card
                        </BuyDeleteButton>
                    </div>
                </div>
                <div className={classes.certificateByIdShopAndTagsAndDescription}>
                    <div className={classes.certificateByIdShopAndTags}>
                        <div className={classes.certificateByIdShop}>
                            <Text fSize={32}>Shop</Text>
                            <div className={classes.certificateByIdShopAndTagSize}>
                                <Text fSize={24}>
                                    {certificateByID.shop}
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
                            {certificateByID.description}
                        </Text>
                    </div>
                </div>
                <div className={classes.certificateByIdImages}>
                    <div className={classes.certificateByIdSmallImages}>
                        <img src={mainImage} alt="" className={classes.certificateByIdSmallImage} onClick={() => setSelectedImage(mainImage)}/>
                        <img src={secondImage} alt="" className={classes.certificateByIdSmallImage} onClick={() => setSelectedImage(secondImage)}/>
                        <img src={thirdImage} alt="" className={classes.certificateByIdSmallImage} onClick={() => setSelectedImage(thirdImage)}/>
                    </div>
                    <img src={selectedImage} alt="" className={classes.certificateByIdBigImage}/>
                </div>
            </div>
        </div>
    );
};

export default CertificateById;