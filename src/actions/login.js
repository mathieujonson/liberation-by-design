import ActionTypes from '../action-types';
import {auth} from './database';

export function getLogin() {
    return dispatch => {
        dispatch(getLoginRequestedAction());
        return auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                console.log(error);
                dispatch(getLoginRejectedAction());
            });
            console.log("blah")
            auth().onAuthStateChange((user) => {
                if (user) {
                    dispatch(getLoginFulfilledAction(user));
                    console.log(user)
                }
            })
        
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