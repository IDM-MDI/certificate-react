import React, {useEffect, useState} from 'react';
import Pagination from "../list/Pagination";
import TagTitle from "../list/TagTitle";
import classes from "../list/List.module.css";
import TagList from "../list/TagList";
import Loader from "../loader/Loader";
import {fetchEntity} from "../API/FetchService";

const URL = 'http://localhost:8080/api/v1/tags'
const SIZE = 9
const MILLISECONDS = 500;

const TagsPage = () => {
    const [data,setData] = useState(null);
    const [isLoading,setLoading] = useState(true)
    const [param,setParam] = useState({
        pageNumber : 0,
        sort : 'id',
        direction : 'asc'
    })


    // const [pageNumber,setPageNumber] = useState(() => {
    //     const init = localStorage.getItem('tagsPage')
    //     return (init === null || init === undefined) ? 0 : init;
    // })
    // window.addEventListener("beforeunload", ()=>{
    //     localStorage.setItem('tagsPage',pageNumber)
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
        <div className={classes.listBlock}>
            <TagTitle setParam={setParam} param={param} />
            {
                isLoading ?
                    <Loader />
                    :
                    <TagList data={data}></TagList>
            }
            <Pagination request={data} onClickPrev={prevPage} onClickNext={nextPage} param={param} setParam={setParam}/>
        </div>
    );
};

export default TagsPage;