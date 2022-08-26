import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {appBaseUrl} from "./Shared/Constants/routes";

const AppProvider = ({children}) => {
    return (
        <Router basename={appBaseUrl}>
            {children}
        </Router>
    );
};

export default AppProvider;
