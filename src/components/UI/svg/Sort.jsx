import React, {useEffect, useMemo, useState} from 'react';
import ArrowDownGreen from './img/arrowDownGreen.svg'
import ArrowDownPink from './img/arrowDownPink.svg'
import ArrowUpGreen from './img/arrowUpGreen.svg'
import ArrowUpPink from './img/arrowUpPink.svg'
import classes from './Svg.module.css'
import Text from "../text/Text";
import classnames from "classnames";

const DEFAULT_SORT = 'id';
const ASC = 'asc';
const DESC = 'desc'


const Sort = ({children,param,setParam,...props}) => {
    const sortName = children.toString().toLowerCase();

    let isActive = param.sort === sortName
    let isUp = param.sort === sortName && param.direction === ASC
    let isDown = param.sort === sortName && param.direction === DESC

    const arrowUp = isUp ? ArrowUpGreen : ArrowUpPink
    const arrowDown = isDown ? ArrowDownGreen : ArrowDownPink

    return (
        <div className={classes.sort}>
            <Text fSize={24}>{children}</Text>
            <div className={classes.sortArrows} onClick={() => {
                if(isActive === false) {
                    isActive = true
                    isUp = true
                }
                else if(isActive && (isUp === false && isDown === false)) {
                    isUp = true
                }
                else if (isActive && (isUp && isDown === false)) {
                    isUp = false
                    isDown = true
                }
                else if(isActive && (isUp === false && isDown)) {
                    isActive = false
                    isDown = false
                }
                setParam(param => ({
                    ...param,
                    sort : isActive ? sortName : DEFAULT_SORT,
                    direction : isDown ? DESC : ASC
                }));
            }}>
                <img src={arrowUp} alt="" />
                <img src={arrowDown} alt="" />
            </div>
        </div>
    );
};

export default Sort;