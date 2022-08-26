import {API_BASE_URL} from "../../../shared/constants/api";

export const types = {
    getQuestions: 'getQuestions'
}

export const urls = {
    [types.getQuestions]: API_BASE_URL + 'questions'
}
