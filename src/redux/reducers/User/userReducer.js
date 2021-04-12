let user = JSON.parse(localStorage.getItem('auth'));




const initalState = {
    login: !!user,
    user: user
}

const USER = {
    LOGIN: 'USER_LOGIN',
    LOGOUT: 'USER_LOGOUT'
}

export function userLogin() {
    return {
        type: USER.LOGIN
    }

}
export function userLogout() {
    return {
        type: USER.LOGOUT
    }

}

export default function userReducer(state = initalState, action) {

    switch (action.type) {
        case USER.LOGIN:
            return {
                login: true,
                user: {
                    name: 'tran minh tri',
                    email: 'tminhtri93@gmail.com'
                }
            }
        case USER.LOGOUT:
            return {
                ...state,
                login: false,
                user: null
            }

        default:
            break;
    }
    return state
}