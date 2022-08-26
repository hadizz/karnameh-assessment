import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {appBaseUrl} from "./Shared/Constants/routes";
import {Provider} from "react-redux";
import store from "./Store";

const AppProvider = ({children}) => {
    return (
        <Provider store={store}>
            <Router basename={appBaseUrl}>
                {children}
            </Router>
        </Provider>
    );
};

export default AppProvider;
