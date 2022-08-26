import React from 'react';
import HomePage from "./Pages/Home";
import QuestionPage from "./Pages/Question";
import {Route, Switch} from 'react-router-dom';
import * as routes from "./Shared/Constants/routes";

const App = () => {
    return (
        <Switch>
            <Route path={`/${routes.QUESTION_DETAILS_PAGE}/:id`} render={route => <QuestionPage route={route}/>}/>
            <Route exact path="/" render={route => <HomePage route={route}/>}/>
        </Switch>
    );
};

export default App;
