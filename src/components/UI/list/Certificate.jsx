import React,{useContext} from 'react';
import classes from './List.module.css'
import Text from "../text/Text";
import Cart from './svg/cart.svg'
import DefaultImage from './img/istockphoto-1335934273-640x640.jpg'
import {Context} from "../context/context";
import {addCertificateToOrder} from "../API/OrderService";

const IMAGE_URL = "http://localhost:8080/api/v1/gifts/";

function getImage(certificate) {
    return certificate.haveMainImage? IMAGE_URL + certificate.id + "/img?name=main" : DefaultImage;
}

const Certificate = ({children,...props}) => {
    const context = useContext(Context);
    const setCertificateByID = context.setCertificateByID
    const setCertificateByIDVisible = context.setCertificateByIDVisible

    const name = children.name + ' certificate';
    const image = getImage(children)
    const price = children.price;

    return (
        <div className={classes.certificateBlock}>
            <img src={image} alt="" className={classes.certificateItemImage}  onClick={()=> {
                setCertificateByID(children)
                setCertificateByIDVisible(true)
            }}/>
            <div className={classes.certificateItemName}>
                <Text fSize={20}>{name}</Text>
            </div>
            <div className={classes.certificateItemOrder}>
                <Text fSize={26} color={'pink'}>{price}$</Text>
                <div className={classes.certificateItemCart} onClick={() => {
                    addCertificateToOrder(children.id,context)
                }}>
                    <img src={Cart} alt={"cart image"}/>
                </div>
            </div>
        </div>
    );
};

export default Certificate;