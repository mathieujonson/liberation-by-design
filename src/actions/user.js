/* VESTIGE CODE, EXAMPLE PURPOSES ONLY */
import ActionTypes from '../action-types';
import {database} from './database';

export function addUser() {
    return dispatch => {
        dispatch(addUserRequestedAction());
        let userId = database.ref().child('users').push().key

        // let addUserEndpoint = database.ref('/users/'+userId).on('value', snap => {
        //     console.log('***we are getting data***', snap.val())
        // })

        let userData = {
            id: userId,
            games: [
                {
                    question_index: 1,
                    score: 20,
                    questions: [
                        '123abc',
                        'abc123',
                        '321cba',
                        'cba321'
                    ]
                }
            ],
            survey: 'yes'
        }

        let updates = {}
        updates['/users/' + userId] = userData
        database.ref().update(updates)
        .then(
        () => {
            dispatch(addUserFulfilledAction(userData)) 
        }, 
        () => {
            dispatch(addUserRejectedAction());
        })
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

function addUserFulfilledAction(userData) {
    return {
        type: ActionTypes.AddUserFulfilled,
        userData
    }
}