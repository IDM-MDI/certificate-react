import React, {useEffect, useState,useContext} from 'react';
import Text from "../text/Text";
import classes from './List.module.css'
import Certificate from "./Certificate";
import {Context} from "../context/context";

const CertificateList = ({data,reload,...props}) => {
    const context = useContext(Context);
    const setMessage = context.setMessage;
    const setMessageVisible = context.setMessageVisible;

    const [listCertificate,setCertificates] = useState(
        <div onClick={reload} className={classes.reloadText}>
            <Text fSize={36} color={'pink'}>
                There are nothing find, click on me to reload
            </Text>
        </div>
    )

    useEffect(()=> {
        getListByData()
    },[data])

    function getListByData() {
        if(data !== null) {
            let result = [];
            for (let i = 0; i < data.content.length; i++) {
                if(i + 1 % 5 === 0) {
                    result += <div className={classes.nextLine}/>
                }
                result[i] = <Certificate
                    context={context}
                    setMessage={setMessage}
                    setMessageVisible={setMessageVisible}
                    key={data.content[i].id}>
                    {data.content[i]}
                </Certificate>
            }
            setCertificates(result);
        }
    }

    return (
        <div className={classes.certificateItems}>
            {listCertificate}
        </div>
    );
};

export default CertificateList;
