import React from 'react';
import UnderLine from "../text/UnderLine";
import classes from './List.module.css'
import Text from "../text/Text";
import CustomButton from "../button/CustomButton";
import DefaultImage from './img/istockphoto-1335934273-640x640.jpg'
import axios from "axios";

const IMAGE_URL = "http://localhost:8080/api/v1/gifts/";

const URL = 'http://localhost:8080/api/v1/order/';
const BOUGHT = 'BOUGHT';


function getImage(certificate) {
    return certificate.haveMainImage? IMAGE_URL + certificate.id + "/img?name=main" : DefaultImage;
}

const Order = ({children,reload,jwt,...props}) => {
    const id = children.id;
    const image = getImage(children.gift);

    return (
        <div className={classes.orderBlock}>
            <div className={classes.orderFullBlock}>
                <div className={classes.orderInfo}>
                    <div>
                        <img src={image} alt="" className={classes.orderImage}/>
                        <div className={classes.orderName}>
                            <Text fSize={36}>{children.gift.name}</Text>
                        </div>
                    </div>
                    <div className={classes.orderPrice}>
                     <Text fSize={36} color={'pink'}>{children.price}$</Text>
                    </div>
                </div>
                <div className={classes.orderButtons}>
                    <CustomButton
                        color={'pink'}
                        onClick={ async () => {
                            await axios.delete(URL + id,{
                                headers: {
                                    'Authorization': 'Bearer ' + jwt
                                }
                            })
                                .then(() => {
                                    reload()
                                })
                                .catch(() => {
                                    reload()
                                })
                        }}>
                        Delete
                    </CustomButton>
                    <CustomButton
                        color={'green'}
                        onClick={ async () => {
                            children.status = BOUGHT;
                            await axios.patch(URL + id,{
                                'id' : id,
                                'gift' : children.gift,
                                'price' : children.price,
                                'purchaseTime' : children.purchaseTime,
                                'status' : children.status,
                                'userId' : children.userId,
                                'giftId' : children.giftId
                            },{
                                headers: {
                                    'Authorization': 'Bearer ' + jwt
                                }
                            })
                                .then(() => {
                                    reload()
                                })
                                .catch(() => {
                                    reload()
                                })
                        }}
                    >
                        Buy
                    </CustomButton>
                </div>
            </div>
            <UnderLine width={'100%'} color={'green'}/>
        </div>
    );
};

export default Order;