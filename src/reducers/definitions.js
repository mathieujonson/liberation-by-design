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
        case ActionTypes.PushDefinition: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: '',
            });
        }
        case ActionTypes.PushDefinitionRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error pushing new defintion to database.'
            })
        }
        case ActionTypes.PushDefinitionFulfilled: {
            const definitions = action.definition
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Inserted definition.',
                definitions: [...state.definitions, ...definitions],
            })
        }
        case ActionTypes.DeleteDefinitionFulfilled: {
            const key = action.key,
                  newState = Object.assign({}, state)

            delete newState[key]

            return Object.assign({}, newState, {
                inProgress: false,
                success: 'Inserted definition.',
            })
        }
        default:
            return state;
    }
}