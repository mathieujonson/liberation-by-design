import ActionTypes from '../action-types';
import {database} from './database';

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

export function addUser(userId, username, password) {
    return dispatch => {
        dispatch(addUserRequestedAction());
        return firebase.database().ref('users/' + userId).set({
            username: username,
            password: password
        }).catch((error) => {
            console.log(error);
            dispatch(addUsersRejectedAction())
        });
    }
}

export function updateUser(userId, username, password) {
    // Populate User
    var userData = {
        userId: userId,
        username: username,
        password: password
    }

    // Get a key for a new User.
    var newUserKey = firebase.database().ref().child('users').push().key;
    var updates = {};
    updates['/users/' + newUserKey] = userData;
    dispatch(updateUserRequestedAction());
    return firebase.database().ref().update(updates).catch((error) => {
        console.log(error);
        dispatch(updateUserRejectedAction())
    });
}

export function deleteUser(userId) {
    dispatch(deleteUserRequestedAction());
    return firebase.database().ref('posts/' + userId).remove().catch((error) => {
        console.log(error);
        dispatch(deleteUserRejectedAction())
    });
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

function addUserRequestedAction() {
    return {
        type: ActionTypes.AddUserRequested
    }
}

function addUserRejectedAction() {
    return {
        type: ActionTypes.AddUserRejected
    }
}

function updateUserRequestedAction() {
    return {
        type: ActionTypes.UpdateUserRequested
    }
}

function updateUserRejectedAction() {
    return {
        type: ActionTypes.UpdateUserRejected
    }
}