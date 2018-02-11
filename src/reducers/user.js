import ActionTypes from '../action-types';

export function user(state = {}, action) {
    switch(action.type) {
        case ActionTypes.AddUser: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: '',
            });
        }
        case ActionTypes.AddUserRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in adding user.',
            });
        }
        case ActionTypes.AddUserFulfilled: {
            const userData = action.userData
            return Object.assign({}, state, {
                ...userData,
                inProgress: false,
                success: 'Added user.',
            })
        }
        case ActionTypes.UpdateUser: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: '',
            });
        }
        case ActionTypes.UpdateUserRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in adding user.',
            });
        }
        case ActionTypes.UpdateUserFulfilled: {
            const userData = action.userData
            return Object.assign({}, state, {
                ...userData,
                inProgress: false,
                success: 'Updated user.',
            })
        }
        case ActionTypes.UpdateQuestion: {
            const question = action.question
            return Object.assign({}, state, {
                question,
                inProgress: false,
                success: 'Updated question.',
            })
        }
        default:
            return state;
    }
}