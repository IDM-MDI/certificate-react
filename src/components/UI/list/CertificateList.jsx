import React, {useEffect, useState} from 'react';
import Text from "../text/Text";
import classes from './List.module.css'
import Certificate from "./Certificate";

const CertificateList = ({data,...props}) => {
    const [listCertificate,setCertificates] = useState(<Text fSize={36} color={'pink'}>There are nothing find</Text>)

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
                result[i] = <Certificate key={data.content[i].id}>{data.content[i]}</Certificate>
            }
            setCertificates(result);
        }
    }

    if(data === null) {
        return;
    }

    return (
        <div className={classes.certificateItems}>
            {listCertificate}
        </div>
    );
};

export default CertificateList;
