import {SELECT_USER} from '../actions/shared'
import {LOGOUT} from '../actions/shared'

export default function login(state = {}, action){
    switch(action.type){
        case SELECT_USER:
            return action.user
        case LOGOUT:
            return {}
        default:
            return state
    }
}