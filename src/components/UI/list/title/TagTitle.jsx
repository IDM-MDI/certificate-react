import React, {useContext} from 'react';
import classes from "../List.module.css";
import Text from "../../text/Text";
import UnderLine from "../../text/UnderLine";
import Sort from "../../svg/Sort";
import Search from "../../svg/Search";
import Add from "../../svg/Add";
import {Context} from "../../context/context";

const TagTitle = ({param,setParam,setSearch,...props}) => {
    const context = useContext(Context);
    const[setAddTagVisible] = [context.setAddUpdateTagVisible]

    return (
        <div className={classes.listTitle}>
            <div className={classes.titleContent}>
                <div className={classes.titleName}>
                    <Text fSize={36}>Tags</Text>
                    <Add byAdmin={true} onClick={() => setAddTagVisible(true)}/>
                </div>
                <div className={classes.titleSort}>
                    <Sort param={param} setParam={setParam}
                    >
                        Name
                    </Sort>
                    <Search setSearch={setSearch} />
                </div>
            </div>
            <UnderLine color={'green'} width={1683}></UnderLine>
        </div>
    );
};

export default TagTitle;