import {RECEIVE_DATA} from '../actions/shared'
import {ADD_QUESTION, SAVE_QUESTION_ANSWERE} from '../actions/questions'


export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.questions
        case ADD_QUESTION:
            return action.questions
        case SAVE_QUESTION_ANSWERE:
            return action.questions
        default:
            return state

    }
}