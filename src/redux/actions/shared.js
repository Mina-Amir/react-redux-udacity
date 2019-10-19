import {_getUsers, _getQuestions} from '../../_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const LOGIN = 'LOGIN'
export const SELECT_USER = 'SELECT_USER'
export const LOGOUT = 'LOGOUT'
export const LOAD_DATA = 'LOAD_DATA'

function receiveData (users, questions) {
    return {
        type: RECEIVE_DATA,
        users,
        questions,
    }
}

export function handleInitialData(){
    return dispatch => {
        return Promise.all([
                _getUsers(),
                _getQuestions()
            ]).then(([users, questions]) => {
                dispatch(receiveData(users, questions))
            })
    }
}

function login () {
    return {
        type: LOGIN,
        login: true
    }
}

export function handleLogin () {
    return dispatch => {
        return dispatch(login())
    }
}

function logout () {
    return {
        type: LOGOUT
    }
}

export function handleLogout () {
    return dispatch => {
        return dispatch(logout())
    }
}

function selectUser (selectedUser) {
    return{
        type: SELECT_USER,
        user: selectedUser,
    }
}

export function handleSelectedUser(selectedUser){
    return (dispatch, getState) => {
        let state = getState()
        return dispatch(selectUser(state.users[selectedUser]))
    }
}

function loader (status) {
    return {
        type: LOAD_DATA,
        loading: status
    }
}

export function handleLoader (status) {
    return dispatch => {
        return dispatch(loader(status))
    }
}