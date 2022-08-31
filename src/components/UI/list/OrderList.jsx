import React,{useEffect, useState} from 'react';
import Order from "./Order";
import Text from "../text/Text";
import classes from './List.module.css'

const OrderList = ({data,...props}) => {
    const [listOrder,setOrders] = useState(<Text fSize={36} color={'pink'}>There are nothing find</Text>)

    useEffect(()=> {
        getListByData()
    },[data])

    function getListByData() {
        if(data === null) {
            return;
        }

        let result = [];
        for (let i = 0; i < data.content.length; i++) {
            result[i] = <Order key={data.content[i].id}>{data.content[i]}</Order>
        }
        setOrders(result);
    }

    return (
        <div>
            {listOrder}
        </div>
    );
};

export default OrderList;