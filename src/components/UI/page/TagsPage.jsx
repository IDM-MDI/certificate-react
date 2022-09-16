import React, {useContext, useEffect, useState} from 'react';
import Pagination from "../list/Pagination";
import TagTitle from "../list/title/TagTitle";
import classes from "../list/List.module.css";
import TagList from "../list/TagList";
import Loader from "../loader/Loader";
import {fetchEntity, fetchSearchByName} from "../API/FetchService";
import {fetchPage, nextPage, prevPage} from "./PageService";
import TagAddUpdate from "../popup/TagAddUpdate";
import {Context} from "../context/context";

const URL = 'http://localhost:8080/api/v1/tags'
const SEARCH_URL = 'http://localhost:8080/api/v1/tags/search'
const SIZE = 9


const TagsPage = () => {
    const context = useContext(Context)
    const [setMessage] = [context.setMessage]
    const [setMessageVisible] = [context.setMessageVisible]
    const [data,setData] = useState(null);
    const [isLoading,setLoading] = useState(true)
    const [name,setName] = useState('')
    const [param,setParam] = useState({
        pageNumber : 0,
        sort : 'id',
        direction : 'asc'
    })

    useEffect(()=> {
        fetchPage(setLoading,name ? tagSearch : tagPage)
    },[param,name])

    function tagPage() {
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
                message: 'TAGS NOT FOUND'
            })
            setMessageVisible(true)
            setLoading(false)
        })
    }

    function tagSearch() {
        fetchSearchByName(SEARCH_URL,name)
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
            .catch(reason => {
                setMessage({
                    type: 'ERROR',
                    message: reason.response.data
                })
                setMessageVisible(true)
                setLoading(false)
            })
    }

    return (
        <div className={classes.listBlock}>
            <TagTitle setSearch={setName} setParam={setParam} param={param} />
            {
                isLoading ?
                    <Loader />
                    :
                    <TagList reload={() => fetchPage(setLoading,name ? tagSearch : tagPage)} data={data}></TagList>
            }
            <TagAddUpdate />
            <Pagination
                onClickNext={() => {
                    nextPage(param,setParam)
                }}
                onClickPrev={() => {
                    prevPage(param,setParam)
                }}
                request={data}
                param={param}
                setParam={setParam}/>
        </div>
    );
};

export default TagsPage;