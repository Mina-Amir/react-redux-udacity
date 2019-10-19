import {RECEIVE_DATA} from '../actions/shared'
import {GET_USERS} from '../actions/users'


export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.users
        case GET_USERS:
            return action.users
        default:
            return state

    }
}