import ActionTypes from '../action-types';
import {auth} from './database';

export function getLogin(email, password) {    
    return dispatch => {       
        dispatch(getLoginRequestedAction())
        return auth.signInWithEmailAndPassword(email, password)
        .then((user) =>{
            dispatch(getLoginFulfilledAction(user))
        })
        .catch((error) => {
            console.log(error);
            console.log(error.code);
            dispatch(getLoginRejectedAction());
        });
    }
}

function getLoginRequestedAction() {
    return {
        type: ActionTypes.GetLoginRequested
    }
}

function getLoginRejectedAction() {
    return {
        type: ActionTypes.GetLoginRejected
    }
}

function getLoginFulfilledAction(login) {    
    return {
        type: ActionTypes.GetLoginFulfilled,
        login
    }
}