import { combineReducers } from 'redux'
import { definitions } from './definitions'
import { questions } from './questions'
import { user } from './user'
import flashMessage from './flash-message'

const rootReducer = combineReducers({
    definitions:  definitions,
    questions:  questions,
    user:  user,
    flashMessage: flashMessage
});

export default rootReducer