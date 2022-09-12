import React, {useEffect, useMemo, useState} from 'react';
import Footer from "./components/UI/Footer";
import classes from './components/UI/styles/main.module.css'
import Header from "./components/UI/Header";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/UI/AppRouter";
import Sign from "./components/UI/popup/Sign";
import {Context} from "./components/UI/context/context";
import axios from "axios";
import {initJWT} from "./components/UI/API/JWTService";
import Loader from "./components/UI/loader/Loader";

function App() {
    const[isBusy,setBusy] = useState(true)
    const[auth,setAuth] = useState(undefined);
    const[isSignVisible,setSignVisible] = useState(false);
    const[isAccountMenuVisible,setAccountMenuVisible] = useState(false);
    const[isCertificateByIDVisible,setCertificateByIDVisible] = useState(false);
    const[certificateByID,setCertificateByID] = useState(null);
    const[isAddTagVisible,setAddTagVisible] = useState(false);
    const[isAddCertificateVisible,setAddCertificateVisible] = useState(false)

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
                        isAddTagVisible,setAddTagVisible,
                        isAddCertificateVisible,setAddCertificateVisible
                    }}>
                        <BrowserRouter>
                            <div className={classes.container}>
                                <Header/>
                                <Sign/>
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
