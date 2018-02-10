import ActionTypes from '../action-types';

export function users(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetUsers: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: '',
            });
        }
        case ActionTypes.GetUsersRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting users.',
            });
        }
        case ActionTypes.GetUsersFulfilled: {
            const users = action.users
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Got users.',
                users: users,
            })
        }
        default:
            return state;
    }
}