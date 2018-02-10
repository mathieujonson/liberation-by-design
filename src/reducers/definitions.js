import ActionTypes from '../action-types';

export function definitions(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetDefinitions: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: '',
            });
        }
        case ActionTypes.GetDefinitionsRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting definitions.',
            });
        }
        case ActionTypes.GetDefinitionsFulfilled: {
            const definitions = action.definitions
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Got definitions.',
                definitions: definitions,
            })
        }
        default:
            return state;
    }
}