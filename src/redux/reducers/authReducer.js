import { ACTION_SET_AUTH,ACTION_RESET_AUTH } from "../actions/authAction";

const initState = {
    isAuth: false,
    token: null
}

export const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_SET_AUTH:
             return {...state,...action.payload};
        case ACTION_RESET_AUTH:
             return initState;
        default:
            return state
            
    }
}