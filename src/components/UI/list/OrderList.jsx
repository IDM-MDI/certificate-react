import React, {useEffect, useState} from 'react';
import Order from "./Order";
import Text from "../text/Text";

const OrderList = ({data,jwt,...props}) => {
    const [listOrder,setOrders] = useState(<Text fSize={36} color={'pink'}>There are nothing find</Text>)

    useEffect(()=> {
        getListByData()
    },[data])

    function getListByData() {
        let result = [];
        if(data === null) {
            return;
        }

        for (let i = 0; i < data.content.length; i++) {
            result[i] = <Order key={data.content[i].id} jwt={jwt}>{data.content[i]}</Order>
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