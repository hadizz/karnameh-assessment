import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {appBaseUrl} from "./shared/constants/routes";
import {Provider} from "react-redux";
import store from "./store";

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
