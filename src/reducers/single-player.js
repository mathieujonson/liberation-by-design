/* VESTIGE CODE, EXAMPLE PURPOSES ONLY */

import ActionTypes from '../action-types';

export function singlePlayer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetWordRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: '',
            });
        }
        case ActionTypes.GetWordRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting word.',
            });
        }
        case ActionTypes.GetWordFulfilled: {
            const word = action.word
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Got word.',
                word: word,
                gameStep:7,
                lettersGuessed: []
            })
        }
        case ActionTypes.SingleGuessLetter: {
            const lettersGuessed = state.lettersGuessed ? [action.letter].concat(state.lettersGuessed) : [action.letter]
            return Object.assign({}, state, {
                lettersGuessed: lettersGuessed
            })
        }
        case ActionTypes.SingleUpdateStep: {
            return Object.assign({}, state, {
                gameStep: action.step
            })
        }
        default:
            return state;
    }
}