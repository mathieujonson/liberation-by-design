import { combineReducers } from 'redux'
import { definitions } from './definitions'
import { questions } from './questions'
import { login } from './login'
import flashMessage from './flash-message'

const rootReducer = combineReducers({
    definitions: definitions,
    questions:   questions,
    login:       login,
    flashMessage: flashMessage
});

export default rootReducer