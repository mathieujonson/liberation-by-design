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
        default:
            return state;
    }
}