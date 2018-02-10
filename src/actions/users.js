/* VESTIGE CODE, EXAMPLE PURPOSES ONLY */
import ActionTypes from '../action-types';
import database from './database';

export function getUsers() {
    return dispatch => {
        dispatch(getUsersRequestedAction());
        return database.ref(`/users`).once('value', snap => {
            const users = snap.val();
            dispatch(getUsersFulfilledAction(users))
        }).catch((error) => {
            console.log(error);
            dispatch(getUsersRejectedAction());
        });
    }
}

function getUsersRequestedAction() {
    return {
        type: ActionTypes.GetUsersRequested
    }
}

function getUsersRejectedAction() {
    return {
        type: ActionTypes.GetUsersRejected
    }
}

function getUsersFulfilledAction(users) {
    return {
        type: ActionTypes.GetUsersFulfilled,
        users
    }
}