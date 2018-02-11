import ActionTypes from '../action-types';

export function questions(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetQuestions: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: '',
            });
        }
        case ActionTypes.GetQuestionsRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting questions.',
            });
        }
        case ActionTypes.GetQuestionsFulfilled: {
            const questions = action.questions
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Got questions.',
                questions: questions,
            })
        }
        case ActionTypes.PushQuestion: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: '',
            });
        }
        case ActionTypes.PushQuestionRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error pushing new question to database.'
            })
        }
        case ActionTypes.PushQuestionFulfilled: {
            const question = action.question
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Inserted definition.',
                questions: [...state.questions, ...question],
            })
        }
        case ActionTypes.DeleteQuestionFulfilled: {
            const key = action.key,
                newState = Object.assign({}, state)

            delete newState.questions[key]

            return Object.assign({}, newState, {
                inProgress: false,
                success: 'Inserted definition.',
            })
        }
        default:
            return state;
    }
}