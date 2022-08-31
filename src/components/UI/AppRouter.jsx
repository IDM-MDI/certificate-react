import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "./page/About";
import CertificatesPage from "./page/CertificatesPage";
import OrdersPage from "./page/OrdersPage";
import CertificatesByTag from "./page/CertificatesByTag";
import TagsPage from "./page/TagsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/certificates'} replace />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/orders'} element={<OrdersPage />} />
            <Route path={'/admin'} element={<OrdersPage />} />
            <Route path={'/certificates'} element={<CertificatesPage />} />
            <Route exact path={'/tags'} element={<TagsPage/>} />
            <Route exact path={'/tags/:id'} element={<CertificatesByTag />} />
            <Route path={'/error'} />
            <Route path={'*'} element={<Navigate to={'/error'} />}/>
        </Routes>
    );
};

export default AppRouter;