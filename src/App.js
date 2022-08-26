import React from 'react';
import HomePage from "./Pages/Home";
import QuestionPage from "./Pages/Question";
import {Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <Switch>
            <Route path="/question/:id" render={route => <QuestionPage route={route}/>}/>
            <Route exact path="/" render={route => <HomePage route={route}/>}/>
        </Switch>
    );
};

export default App;
