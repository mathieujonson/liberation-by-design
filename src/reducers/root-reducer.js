import { combineReducers } from 'redux'
import { definitions } from './definitions'
import flashMessage from './flash-message'

const rootReducer = combineReducers({
    definitions:  definitions,
    flashMessage: flashMessage
});

export default rootReducer