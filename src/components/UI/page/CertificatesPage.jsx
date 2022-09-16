import React from 'react';
import {useState,useEffect,useContext} from "react";
import Top from "../block/Top";
import CertificateByID from "../popup/CertificateByID";
import CertificateList from "../list/CertificateList";
import classes from '../styles/main.module.css'
import cl from '../list/List.module.css'
import Pagination from "../list/Pagination";
import {fetchEntity} from "../API/FetchService";
import Loader from "../loader/Loader";
import CertificateTitle from "../list/title/CertificateTitle";
import {fetchPage, nextPage, prevPage} from "./PageService";
import CertificateAddUpdate from "../popup/CertificateAddUpdate";
import {Context} from "../context/context";

const URL = 'http://localhost:8080/api/v1/gifts';
const SIZE = 25;

const CertificatesPage = () => {
    const context = useContext(Context)
    const [setMessage] = [context.setMessage]
    const [setMessageVisible] = [context.setMessageVisible]
    const [data,setData] = useState(null);
    const [isLoading,setLoading] = useState(true)
    const [param,setParam] = useState({
        pageNumber : 0,
        sort : 'id',
        direction : 'asc'
    })

    useEffect(()=> {
        fetchPage(setLoading,certificatePage)
    },[param])

    function certificatePage() {
        fetchEntity(
            URL,
            SIZE,
            param.pageNumber,
            param.sort,
            param.direction
        ).then(response => {
            setData(response.data)
            setLoading(false)
        })
        .catch(() => {
            setMessage({
                type: 'ERROR',
                message: 'CERTIFICATES NOT FOUND'
            })
            setMessageVisible(true)
            setLoading(false)
        })
    }

    return (
        <div className={classes.container}>
            <Top></Top>
            <CertificateByID />
            <CertificateAddUpdate />
            <div className={cl.listBlock}>
                <CertificateTitle param={param} setParam={setParam} />
                {
                    isLoading ?
                        <Loader />
                        :
                        <CertificateList
                            reload={() => fetchPage(setLoading,certificatePage)}
                            data={data}/>
                }
            </div>
            <Pagination
                onClickNext={() => {
                    nextPage(param,setParam)
                }}
                onClickPrev={()=> {
                    prevPage(param,setParam)
                }}
                request={data}
                param={param}
                setParam={setParam}/>
        </div>
    );
};

export default CertificatesPage;