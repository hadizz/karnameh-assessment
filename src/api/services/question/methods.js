import {methodGet} from "../../../shared/constants/api";
import {api} from "../../index";
import {types, urls} from "./urls";

export const getQuestionsService = () => {
    return api({url: urls[types.getQuestions], method: methodGet});
}
