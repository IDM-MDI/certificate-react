import React from 'react';
import classes from "./List.module.css";
import Arrow from "../svg/Arrow";
import Text from "../text/Text";
import PaginationSearchInput from "../input/PaginationSearchInput";

const emptyArrow = <div className={classes.emptyArrow} />

const Pagination = ({request, param,setParam,onClickPrev,onClickNext,...props}) => {
    if(request === null || param.pageNumber === undefined ||
        (request.hasNext === false && request.numberOfPage === 0)) return;

    const haveNext = request.hasNext;
    const havePrev = request._links !== undefined && request._links.prev !== undefined;
    let prevArrow = havePrev ? <Arrow direction={'left'} height={"75px"} width={"45px"} onClick={onClickPrev}/>: emptyArrow
    let nextArrow = haveNext ? <Arrow direction={'right'} height={"75px"} width={"45px"} onClick={onClickNext}/>:emptyArrow

    return (
        <div className={classes.paginationBlock}>
            <div className={classes.paginationSide}>
                {prevArrow}
                <Text fSize={32}>{param.pageNumber + 1}</Text>
                {nextArrow}
            </div>
            <PaginationSearchInput setInput={setParam}/>
        </div>
    );
};

export default Pagination;