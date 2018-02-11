/* VESTIGE CODE, EXAMPLE PURPOSES ONLY */
import ActionTypes from '../action-types';
import {database} from './database';

export function addUser(questions) {
    let reducedObjOfKeys = {}

    Object.keys(questions).forEach( (key) => {
        if (questions[key].skill.toLowerCase() === 'moderate') {
            reducedObjOfKeys[key] = {
                points: 0,
                correct: false
            }
        }
    })

    return dispatch => {
        dispatch(addUserRequestedAction());
        let userId = database.ref().child('users').push().key

        let userData = {
            id: userId,
            question: "blank",
            questions: reducedObjOfKeys,
            answers: [],
            score: 0,
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

export function updateUser(userId, questionId, answer, points, score) {
    console.log(userId, questionId, answer, points, score)
    
    return dispatch => {
        dispatch(updateUserRequestedAction());

        let userData = {
            // questions: {
            //     questionId: {
            //         correct: answer,
            //         points: points
            //     }
            // },
            score: score,
            survey: 'yes'
        }

        let updates = {}
        updates['/users/' + userId] = userData
        database.ref().update(updates)
        .then(
        () => {
            dispatch(updateUserFulfilledAction(userData)) 
        }, 
        () => {
            dispatch(updateUserRejectedAction())
        })
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

function updateUserFulfilledAction(userData) {
    return {
        type: ActionTypes.UpdateUserFulfilled,
        userData
    }
}

export function updateQuestion(question) {
    return {
        type: ActionTypes.UpdateQuestion,
        question
    }
}