import ActionTypes from '../action-types';
import {database} from './database';

export function getDefinitions() {
    return dispatch => {
        dispatch(getDefinitionsRequestedAction());
        return database.ref(`/definitions`).once('value', snap => {
            const definitions = snap.val();
            dispatch(getDefinitionsFulfilledAction(definitions))
        }).catch((error) => {
            console.log(error);
            dispatch(getDefinitionsRejectedAction());
        });
    }
}

export function pushDefinition(term, definition) {    
    return dispatch => {
        dispatch(pushDefinitionRequestAction());
        return database.ref('/definitions').push({
            term: term,
            definition: definition
        })
        .then(() => {
            dispatch(pushDefinitionFulfilledAction({definition, term}))
        })
        .catch((error) => {
            console.log(error);
            dispatch(pushDefinitionRejected());
        })
    }
}

function pushDefinitionRequestAction() {
    return {
        type: ActionTypes.PushDefinition
    }
}

function pushDefinitionRejected() {
    return {
        type: ActionTypes.PushDefinitionRejected
    }
}

function pushDefinitionFulfilledAction(definition) {
    return {
        type: ActionTypes.PushDefinitionFulfilled,
        definition
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