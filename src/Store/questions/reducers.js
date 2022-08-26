import {FETCH_QUESTIONS_ACTION} from "./actionTypes";

const initialState = {}

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_ACTION:
            return state;
        default:
            return state;
    }
}

export default questionsReducer;
