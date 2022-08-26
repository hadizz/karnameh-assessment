import React from 'react';
import HomePage from "./Pages/Home";
import QuestionPage from "./Pages/Question";
import {Routes, Route} from "react-router-dom";
import * as routes from "./Shared/Constants/routes";
import NotFoundPage from "./Pages/404";

const App = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<HomePage/>}/>
                <Route path={routes.QUESTION_DETAILS_PAGE}>
                    <Route path=':id' element={<QuestionPage/>}/>
                </Route>
                <Route index element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
