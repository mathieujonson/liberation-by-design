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