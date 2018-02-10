import ActionTypes from '../action-types';

export function login(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetLogin: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: '',
            });
        }
        case ActionTypes.GetLoginRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting login.',
            });
        }
        case ActionTypes.GetLoginFulfilled: {
            const login = action.login
            console.log("blah",login)
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Got login.',
                login: login,
            })
        }
        default:
        console.log("default")
            return state;
    }
}