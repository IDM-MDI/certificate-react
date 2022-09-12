import React, {useContext, useState, useRef} from 'react';
import Popup from "./Popup";
import {Context} from "../context/context";
import NoImage from "../list/img/noImage.png";
import classes from './Popup.module.css'
import Text from "../text/Text";
import BuyDeleteButton from "../button/BuyDeleteButton";
import DescriptionInput from "../input/DescriptionInput";
import UnderLineInput from "../input/UnderLineInput";
import classnames from "classnames";

const CertificateAddUpdate = ({children,...props}) => {
    const context = useContext(Context);
    const[isAddCertificateVisible,setAddCertificateVisible] = [context.isAddCertificateVisible,context.setAddCertificateVisible]
    const[certificate,setCertificate] = useState({
        name: '',
        shop: '',
        price: 0,
        description: '',
        mainImage: NoImage,
        secondImage: NoImage,
        thirdImage: NoImage
    })

    const isEmpty = children === undefined || children === null;

    return (
        <Popup
            isVisible={isAddCertificateVisible}
            setVisible={setAddCertificateVisible}
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
    const titleName = isEmpty ? 'ADD' : 'UPDATE'
    return (
        <div className={classes.certificateTitle}>
            <div className={classes.certificateName}>
                <UnderLineInput />
            </div>
            <div className={classes.certificateOrder}>
                <UnderLineInput type={'number'} />
                <BuyDeleteButton color={'green'} onClick={() => {
                }}>
                    {titleName + ' CERTIFICATE'}
                </BuyDeleteButton>
            </div>
        </div>
    );
}

function Content({certificate,setCertificate,...props}) {
    return (
        <div className={classes.certificateContent}>
            <div className={classes.certificateShopAndTags}>
                <div className={classes.certificateShop}>
                    <Text fSize={32}>Shop</Text>
                    <div className={classes.certificateShopAndTagSize}>
                        <UnderLineInput/>
                    </div>
                </div>
                <div className={classes.certificateTags}>
                    <Text fSize={32}>Tags</Text>
                    <Text fSize={24}>There are some text</Text>
                </div>
            </div>
            <DescriptionInput />
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