import React from 'react';
import {useState,useEffect} from "react";
import Top from "../block/Top";
import CertificateByID from "../popup/CertificateByID";
import CertificateList from "../list/CertificateList";
import classes from '../styles/main.module.css'
import cl from '../list/List.module.css'
import Pagination from "../list/Pagination";
import {fetchEntity} from "../API/FetchService";
import Loader from "../loader/Loader";
import CertificateTitle from "../list/CertificateTitle";

const URL = 'http://localhost:8080/api/v1/gifts';
const SIZE = 25;
const MILLISECONDS = 1000;

const CertificatesPage = () => {
    const [data,setData] = useState(null);
    const [isLoading,setLoading] = useState(true)
    const [param,setParam] = useState({
        pageNumber : 0,
        sort : 'id',
        direction : 'asc'
    })
    // const [pageNumber,setPageNumber] = useState(localStorage.getItem('certificatePage'))

    // window.addEventListener("beforeunload", ()=>{
    //     localStorage.setItem('certificatePage',pageNumber)
    // });

    useEffect(()=> {
        setLoading(true)
        fetchEntity(
            URL,
            SIZE,
            param.pageNumber,
            param.sort,
            param.direction
        )
            .then(response => {
                setData(response.data)
            })
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

    return (
        <div className={classes.container}>
            <Top></Top>
            <CertificateByID />
            <div className={cl.listBlock}>
                <CertificateTitle param={param} setParam={setParam} />
                {
                    isLoading ?
                        <Loader />
                        :
                        <CertificateList data={data}/>
                }
            </div>
            <Pagination onClickNext={nextPage} onClickPrev={prevPage} request={data} param={param} setParam={setParam}/>
        </div>
    );
};

export default CertificatesPage;