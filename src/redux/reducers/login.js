import {LOGIN} from '../actions/shared'
import {LOGOUT} from '../actions/shared'

export default function login(state = false, action){
    switch(action.type){
        case LOGIN:
            return true
        case LOGOUT:
            return false
        default:
            return state
    }
}