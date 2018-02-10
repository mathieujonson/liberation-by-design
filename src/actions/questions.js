import ActionTypes from '../action-types';
import {database} from './database';

export function getQuestions() {
    return dispatch => {
        dispatch(getQuestionsRequestedAction());
        return database.ref(`/definitions`).once('value', snap => {
            const questions = snap.val();
            dispatch(getQuestionsFulfilledAction(questions))
        }).catch((error) => {
            console.log(error);
            dispatch(getQuestionsRejectedAction());
        });
    }
}

function getQuestionsRequestedAction() {
    return {
        type: ActionTypes.GetQuestionsRequested
    }
}

function getQuestionsRejectedAction() {
    return {
        type: ActionTypes.GetQuestionsRejected
    }
}

function getQuestionsFulfilledAction(questions) {
    return {
        type: ActionTypes.GetQuestionsFulfilled,
        questions
    }
}