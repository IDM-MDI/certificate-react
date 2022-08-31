import React,{useEffect, useState} from 'react';
import classes from "../styles/main.module.css";
import ChosenTag from "../block/ChosenTag";
import CertificateList from "../list/CertificateList";
import Pagination from "../list/Pagination";
import {useParams} from "react-router-dom";
import {fetchEntity} from "../API/FetchService";
import Loader from "../loader/Loader";
import CertificateByID from "../popup/CertificateByID";

const CERTIFICATE_URL = 'http://localhost:8080/api/v1/gifts/tag/';
const TAG_BY_ID_URL = 'http://localhost:8080/api/v1/tags/';
const SIZE = 25;
const MILLISECONDS = 150;

const CertificatesByTag = () => {
    const params = useParams()
    const [data,setData] = useState(null);
    const [isLoading,setLoading] = useState(true)
    const [tagByID,setTagByID] = useState(null)
    const [param,setParam] = useState({
        pageNumber : 0,
        sort : 'id',
        direction : 'asc'
    })

    useEffect(()=> {
        setLoading(true)

        fetchEntity(
            CERTIFICATE_URL + params.id,
            SIZE,
            param.pageNumber,
            param.sort,
            param.direction
        )
            .then(response => {
                setData(response.data)
            })
        fetchEntity(TAG_BY_ID_URL + params.id)
            .then(response => {
                setTagByID(response.data)
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
        <div>
            {
                isLoading ?
                    <Loader />
                    :
                    <div className={classes.container}>
                        <ChosenTag data={tagByID !== null ? tagByID.content[0] : null}/>
                        <CertificateByID />
                        <CertificateList data={data}/>
                        <Pagination onClickNext={nextPage} onClickPrev={prevPage} request={data} param={param} setParam={setParam}/>
                    </div>
            }
        </div>

    );
};

export default CertificatesByTag;