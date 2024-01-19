import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
} from './Types'
import axios from 'axios'


export const signup = (first_name, last_name, email, password, re_password)=> async dispatch => {

    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        re_password
    })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`,body,config)
        if (res.status === 201){
            dispatch({
                type: SIGNUP_SUCCESS,
                payload:res.data
            })
        }else {
            dispatch({
                type: SIGNUP_FAIL
            })
        }

    } catch (error) {
        if (error.response && error.response.data && error.response.data.email) {
            console.error('Error during signup:', error.response.data.email[0]);
            // Aquí puedes mostrar un mensaje amigable al usuario indicando que el correo electrónico ya está en uso.
        } else {
            console.error('Error during signup:', error.response.data);
        }

        dispatch({
            
            type: SIGNUP_FAIL
        })
    }
}