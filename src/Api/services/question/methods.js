import {methodGet} from "../../../Shared/Constants/api";
import {api} from "../../index";
import {types, urls} from "./urls";

export const getQuestionsService = () => {
    return api({url: urls[types.getQuestions], method: methodGet});
}
