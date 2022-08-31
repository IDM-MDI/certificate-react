import React from 'react';
import classes from "./List.module.css";
import Text from "../text/Text";
import UnderLine from "../text/UnderLine";
import Sort from "../svg/Sort";

const TagTitle = ({param,setParam,...props}) => {
    return (
        <div className={classes.listTitle}>
            <div className={classes.titleContent}>
                <Text fSize={36}>Tags</Text>
                <div className={classes.titleSort}>
                    <Sort param={param} setParam={setParam}
                    >
                        Name
                    </Sort>
                </div>
            </div>
            <UnderLine color={'green'} width={1683}></UnderLine>
        </div>
    );
};

export default TagTitle;