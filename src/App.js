import React, {useEffect, useMemo, useState} from 'react';
import Footer from "./components/UI/Footer";
import classes from './components/UI/styles/main.module.css'
import Header from "./components/UI/Header";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/UI/AppRouter";
import Sign from "./components/UI/popup/Sign";
import {Context} from "./components/UI/context/context";
import {initJWT} from "./components/UI/API/JWTService";
import Loader from "./components/UI/loader/Loader";
import MessagePopup from "./components/UI/popup/MessagePopup";

function App() {
    const[isBusy,setBusy] = useState(true)
    const[auth,setAuth] = useState(undefined);

    const[isSignVisible,setSignVisible] = useState(false);
    const[isAccountMenuVisible,setAccountMenuVisible] = useState(false);

    const[isCertificateByIDVisible,setCertificateByIDVisible] = useState(false);
    const[certificateByID,setCertificateByID] = useState(null);

    const[isAddUpdateTagVisible,setAddUpdateTagVisible] = useState(false);
    const[updateTag,setUpdateTag] = useState(null)

    const[isAddUpdateCertificateVisible,setAddUpdateCertificateVisible] = useState(false)
    const[updateCertificate,setUpdateCertificate] = useState(null)

    const[isMessageVisible,setMessageVisible] = useState(false)
    const[message,setMessage] = useState(null)

    useMemo(() => {
        initJWT()
            .then(r => {
                setAuth(r)
            }).finally(()=> {
            setBusy(false)
        })
    },[])


    return (
        <div>
            {
                    isBusy ?
                    <Loader />
                    :
                    <Context.Provider value={{
                        auth, setAuth,
                        isSignVisible, setSignVisible,
                        isAccountMenuVisible, setAccountMenuVisible,
                        isCertificateByIDVisible, setCertificateByIDVisible,
                        certificateByID, setCertificateByID,
                        isAddUpdateTagVisible,setAddUpdateTagVisible,
                        updateTag,setUpdateTag,
                        isAddUpdateCertificateVisible,setAddUpdateCertificateVisible,
                        updateCertificate,setUpdateCertificate,
                        isMessageVisible,setMessageVisible,
                        message,setMessage
                    }}>
                        <BrowserRouter>
                            <div className={classes.container}>
                                <Header/>
                                <Sign/>
                                <MessagePopup />
                                <AppRouter />
                                <Footer />
                            </div>
                        </BrowserRouter>
                    </Context.Provider>
            }
        </div>
  );
}

export default App;
