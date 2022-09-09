import React, {useEffect, useState} from 'react';
import Pagination from "../list/Pagination";
import TagTitle from "../list/title/TagTitle";
import classes from "../list/List.module.css";
import TagList from "../list/TagList";
import Loader from "../loader/Loader";
import {fetchEntity, fetchSearchByName} from "../API/FetchService";
import {fetchPage, nextPage, prevPage} from "./PageService";
import TagAdd from "../popup/TagAdd";

const URL = 'http://localhost:8080/api/v1/tags'
const SEARCH_URL = 'http://localhost:8080/api/v1/tags/search'
const SIZE = 9
const MILLISECONDS = 500;


const TagsPage = () => {
    const [data,setData] = useState(null);
    const [isLoading,setLoading] = useState(true)
    const [name,setName] = useState('')
    const [param,setParam] = useState({
        pageNumber : 0,
        sort : 'id',
        direction : 'asc'
    })

    useEffect(()=> {
        fetchPage(setLoading,MILLISECONDS,name ? tagSearch : tagPage)
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
        })
    }

    function tagSearch() {
        fetchSearchByName(SEARCH_URL,name)
            .then(response => {
                setData(response.data)
            })
    }

    return (
        <div className={classes.listBlock}>
            <TagTitle setSearch={setName} setParam={setParam} param={param} />
            {
                isLoading ?
                    <Loader />
                    :
                    <TagList data={data}></TagList>
            }
            <TagAdd />
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