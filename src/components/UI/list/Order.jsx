import React from 'react';
import UnderLine from "../text/UnderLine";
import classes from './List.module.css'
import Text from "../text/Text";
import BuyDeleteButton from "../button/BuyDeleteButton";
import DefaultImage from './img/istockphoto-1335934273-640x640.jpg'

const IMAGE_URL = "http://localhost:8080/api/v1/gifts/";

function getImage(certificate) {
    return certificate.haveMainImage? IMAGE_URL + certificate.id + "/img?name=main" : DefaultImage;
}

const Order = ({children,...props}) => {
    const image = getImage(children.gift)
    return (
        <div className={classes.orderBlock}>
            <div className={classes.orderFullBlock}>
                <div className={classes.orderInfo}>
                    <img src={image} alt="" className={classes.orderImage}/>
                    <div className={classes.orderName}>
                        <Text fSize={36}>{children.gift.name} Certificate</Text>
                    </div>
                    <div className={classes.orderPrice}>
                     <Text fSize={36} color={'pink'}>{children.price}$</Text>
                    </div>
                </div>
                <div className={classes.orderButtons}>
                    <BuyDeleteButton color={'pink'}>Delete</BuyDeleteButton>
                    <BuyDeleteButton color={'green'}>Buy</BuyDeleteButton>
                </div>
            </div>
            <UnderLine width={'100%'} color={'green'}/>
        </div>
    );
};

export default Order;