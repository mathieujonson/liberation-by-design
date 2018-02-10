import ActionTypes from '../action-types'

export const sendFlashMessage = (message, className) => {

    return {
        type: ActionTypes.FlashMessage,
        payload: {
            message
        }
    }
};