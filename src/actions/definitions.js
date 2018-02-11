import ActionTypes from '../action-types';
import {database} from './database';

export function getDefinitions() {
    return dispatch => {
        dispatch(getDefinitionsRequestedAction());
        return database.ref(`/definitions`).once('value', snap => {
            const definitions = snap.val();
            console.log(definitions)
            dispatch(getDefinitionsFulfilledAction(definitions))
        }).catch((error) => {
            console.log(error);
            dispatch(getDefinitionsRejectedAction());
        });
    }
}

export function pushNewDefinition(term, definition) {
    return dispatch => {
        dispatch(pushNewDefinitionRequestAction());
        return database.ref('/definitions').set({
            term: term,
            definition: definition
        }).catch((error) => {
            console.log(error);
            dispatch(pushNewDefinitionRejectedAction());
        })
    }
}

function pushNewDefinitionRequestAction() {
    return {
        type: ActionTypes.PushNewDefinition
    }
}

function pushNewDefinitionRejectedAction() {
    return {
        type: ActionTypes.PushNewDefinitionRejected
    }
}

function PushDefinitionsFulfilledAction(definitions) {
    return {
        type: ActionTypes.PushDefinitionFulfilled,
        definitions
    }
}

function getDefinitionsRequestedAction() {
    return {
        type: ActionTypes.GetDefinitionsRequested
    }
}

function getDefinitionsRejectedAction() {
    return {
        type: ActionTypes.GetDefinitionsRejected
    }
}

function getDefinitionsFulfilledAction(definitions) {
    return {
        type: ActionTypes.GetDefinitionsFulfilled,
        definitions
    }
}