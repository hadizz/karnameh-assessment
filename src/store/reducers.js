import {combineReducers} from "redux";
import questionsReducer from "./questions/reducers";

export default combineReducers({
    questions: questionsReducer
});
