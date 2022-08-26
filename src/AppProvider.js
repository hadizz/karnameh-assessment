import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {appBaseUrl} from "./Shared/Constants/routes";

const AppProvider = ({children}) => {
    return (
        <BrowserRouter basename={appBaseUrl}>
            {children}
        </BrowserRouter>
    );
};

export default AppProvider;
