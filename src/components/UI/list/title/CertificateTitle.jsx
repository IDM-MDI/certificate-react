import React,{useContext} from 'react';
import classes from "../List.module.css";
import Text from "../../text/Text";
import UnderLine from "../../text/UnderLine";
import Sort from "../../svg/Sort";
import Add from "../../svg/Add";
import {Context} from "../../context/context";

const CertificateTitle = ({param,setParam}) => {
    const context = useContext(Context);
    const[isAddUpdateCertificateVisible,setAddUpdateCertificateVisible] =
        [
            context.isAddUpdateCertificateVisible,
            context.setAddUpdateCertificateVisible]

    return (
        <div className={classes.listTitle}>
            <div className={classes.titleContent}>
                <div className={classes.titleName}>
                    <Text fSize={36}>Certificates</Text>
                    <Add onClick={() => setAddUpdateCertificateVisible(true)} />
                </div>
                <div className={classes.titleSort}>
                    <Sort param={param} setParam={setParam}
                    >
                        Name
                    </Sort>
                </div>
            </div>
            <UnderLine color={'green'} width={1683} />
        </div>
    );
};

export default CertificateTitle;