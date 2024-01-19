import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
} from '../actions/Types'
import { signup } from '../actions/auth'

const initialState= {
    access: localStorage.getItem('access'),//estas dos variables lo que hacen es llamar del localstorage y ver si existen para agarrar las variables
    refresh : localStorage.getItem('refresh'),
    isAuthenticated:null,
    user:null,
    loading: false
    //esto es lo que aparece en redux
}

export default function(state = initialState, actions){
    const { type, payload} = actions

    switch(type){
        case SIGNUP_SUCCESS:
        case SIGNUP_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access: null,
                refresh:null,
                isAuthenticated:false,
                user:null,
            }

        default:
            return state
    }
}