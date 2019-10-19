import {combineReducers} from 'redux'

import users from './users'
import loading from './loading'
import login from './login'
import user from './selectedUser'
import questions from './questions'

export default combineReducers({
    users,
    questions,
    loading,
    login,
    user
})