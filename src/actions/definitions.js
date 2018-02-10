/* VESTIGE CODE, EXAMPLE PURPOSES ONLY */
import ActionTypes from '../action-types';
import database from './database';

export function getWord(key) {
    return dispatch => {
        dispatch(getWordRequestedAction());
        return database.ref(`/word-list/${key}`).once('value', snap => {
            const word = snap.val();
            dispatch(getWordFulfilledAction(word))
        }).catch((error) => {
            console.log(error);
            dispatch(getWordRejectedAction());
        });
    }
}

export function guessLetter(letter) {
    return {
        type: ActionTypes.SingleGuessLetter,
        letter
    }
}

export function updateStep(step) {
    return {
        type: ActionTypes.SingleUpdateStep,
        step
    }
}

function getWordRequestedAction() {
    return {
        type: ActionTypes.GetWordRequested
    }
}

function getWordRejectedAction() {
    return {
        type: ActionTypes.GetWordRejected
    }
}

function getWordFulfilledAction(word) {
    return {
        type: ActionTypes.GetWordFulfilled,
        word
    }
}