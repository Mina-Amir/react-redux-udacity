export const GET_USERS = 'GET_USERS'

function getUsers(users) {
    return {type: GET_USERS, users}
}

export function handleGetUsers(users) {
    return dispatch => {
        return dispatch(getUsers(users))
    }
}