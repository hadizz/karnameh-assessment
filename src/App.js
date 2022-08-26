import React from 'react';
import HomePage from "./pages/home";
import QuestionPage from "./pages/question";
import {Routes, Route} from "react-router-dom";
import * as routes from "./shared/constants/routes";
import NotFoundPage from "./pages/404";

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
