import {RECEIVE_DATA} from '../actions/shared'
import {LOAD_DATA} from '../actions/shared'

export default function loading(state = true, action){
    switch(action.type){
        case RECEIVE_DATA:
            return false
        case LOAD_DATA:
            return action.loading
        default:
            return state
    }
}