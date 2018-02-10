import ActionTypes from '../action-types';

const initialState = {
    message: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.FlashMessage:
            return action.payload;
        default:
            return state;
    }
};