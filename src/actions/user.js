/* VESTIGE CODE, EXAMPLE PURPOSES ONLY */
import ActionTypes from '../action-types';
import {database} from './database';

export function addUser(questions) {
    let reducedArrayOfKeys = []

    Object.keys(questions).forEach( (key) => {
        if (questions[key].skill.toLowerCase() == 'moderate') reducedArrayOfKeys.push(key) 
    })
    
    return dispatch => {
        dispatch(addUserRequestedAction());
        let userId = database.ref().child('users').push().key

        let userData = {
            id: userId,
            questions: reducedArrayOfKeys,
            answers: [],
            score: 20,
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
            dispatch(addUserRejectedAction())
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