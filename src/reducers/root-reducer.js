import { combineReducers } from 'redux'
import { singlePlayer } from './single-player'
import flashMessage from './flash-message'

const rootReducer = combineReducers({
    singlePlayer: singlePlayer,
    flashMessage: flashMessage
});

export default rootReducer