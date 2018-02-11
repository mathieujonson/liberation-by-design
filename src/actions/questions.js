import ActionTypes from '../action-types';
import {database} from './database';

export function getQuestions() {
    return dispatch => {
        dispatch(getQuestionsRequestedAction());
        return database.ref(`/questions`).once('value', snap => {
            const questions = snap.val();
            dispatch(getQuestionsFulfilledAction(questions))
        }).catch((error) => {
            console.log(error);
            dispatch(getQuestionsRejectedAction());
        });
    }
}

export function pushQuestion(question) {
    return dispatch => {
        dispatch(pushQuestionRequestAction())
        return database.ref('/questions').push({
            question: question.question,
            answer: question.answer,
            explanation: question.explanation,
            points: question.points,
            skill: question.skill
        })
        .then(() => {
            dispatch(pushQuestionFulfilledAction(question))
        })
        .catch((error) => {
            console.log(error)
            dispatch(pushQuestionRejected())
        })
    }
}

export function deleteQuestion(key) {
    return dispatch => {
        dispatch(deleteQuestionRequestAction())
        return database.ref('/questions').child(key).remove()
            .then(() => {
                dispatch(deleteQuestionFulfilledAction(key))
            })
            .catch((error) => {
                console.log(error)
                dispatch(deleteQuestionRejected())
            })
    }
}

function pushQuestionRequestAction() {
    return {
        type: ActionTypes.PushQuestion
    }
}

function pushQuestionRejected() {
    return {
        type: ActionTypes.PushQuestionRejected
    }
}

function pushQuestionFulfilledAction(question) {
    return {
        type: ActionTypes.PushQuestionFulfilled,
        question
    }
}

function deleteQuestionRequestAction() {
    return {
        type: ActionTypes.DeleteQuestion
    }
}

function deleteQuestionRejected() {
    return {
        type: ActionTypes.DeleteQuestionRejected
    }
}

function deleteQuestionFulfilledAction(question) {
    return {
        type: ActionTypes.DeleteQuestionFulfilled,
        question
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