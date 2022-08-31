import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import OrderList from "../list/OrderList";
import Pagination from "../list/Pagination";
import OrderTitle from "../list/OrderTitle";
import {fetchOrder} from "../API/FetchService";
import {Context} from "../context/context";
import Loader from "../loader/Loader";
import {useNavigate} from "react-router-dom";
import {isJWTValidByContext} from "../API/JWTService";
import classes from './Page.module.css'

const URL = 'http://localhost:8080/api/v1/order';
const SIZE = 6;
const MILLISECONDS = 550;

const OrdersPage = () => {
    const context = useContext(Context);
    const navigate = useNavigate()
    const [isAuth,setAuth] = useState(undefined)
    const [data,setData] = useState(null);
    const [isLoading,setLoading] = useState(true)
    const [param,setParam] = useState({
        pageNumber : 0,
        sort : 'id',
        direction : 'asc'
    })

    useEffect(()=> {
        setLoading(true)
        if(isAuth === undefined) {
            isJWTValidByContext(context)
                .then(r => {
                    setAuth(r)
                    r ? changeData() : navigate(`error`)
                })
        }
        else {
            changeData()
        }
        setTimeout(()=>{
            setLoading(false)
        },MILLISECONDS)
    },[param])


    function nextPage() {
        setParam(param => ({
            ...param,
            pageNumber: param.pageNumber + 1
        }));
    }

    function prevPage() {
        setParam(param => ({
            ...param,
            pageNumber: param.pageNumber - 1
        }));
    }

    function changeData() {
        fetchOrder(
            context.auth.jwt,
            URL,
            SIZE,
            param.pageNumber,
            param.sort,
            param.direction
        )
            .then(response => {
                setData(response.data)
            })
    }

    return (
        <div className={classes.ordersPage}>
            <OrderTitle />
            {
                isLoading ?
                    <Loader />
                    :
                    <OrderList data={data}></OrderList>
            }
            <Pagination onClickNext={nextPage} onClickPrev={prevPage} request={data} setParam={setParam} param={param}/>
        </div>
    );
};

export default OrdersPage;