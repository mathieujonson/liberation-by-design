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
        default:
            return state;
    }
}