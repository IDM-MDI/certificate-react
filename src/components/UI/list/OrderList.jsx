import React, {useEffect, useState} from 'react';
import Order from "./Order";
import Text from "../text/Text";
import classes from "./List.module.css";

const OrderList = ({data,reload,jwt,...props}) => {
    const [listOrder,setOrders] = useState(
        <div onClick={reload} className={classes.reloadText}>
            <Text fSize={36} color={'pink'}>
                There are nothing find, click on me to reload
            </Text>
        </div>
    )

    useEffect(()=> {
        getListByData()
    },[data])

    function getListByData() {
        let result = [];
        if(data === null) {
            return;
        }

        for (let i = 0; i < data.content.length; i++) {
            result[i] = <Order reload={reload} key={data.content[i].id} jwt={jwt}>{data.content[i]}</Order>
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