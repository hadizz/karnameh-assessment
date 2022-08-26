import React from 'react';
import HomePage from "./Pages/Home";
import QuestionPage from "./Pages/Question";
import {Routes, Route} from "react-router-dom";
import NotFoundPage from "./Pages/404";

const App = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<HomePage/>}/>
                <Route path={'question'}>
                    <Route path=':id' element={<QuestionPage/>}/>
                </Route>
                <Route index element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
