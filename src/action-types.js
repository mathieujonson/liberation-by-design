const ActionTypes = {
    FlashMessage:            'FLASH_MESSAGE',

    GetDefinitions:          'GET_DEFINITIONS',
    GetDefinitionsRequested: 'GET_DEFINITIONS_REQUESTED',
    GetDefinitionsRejected:  'GET_DEFINITIONS_REJECTED',
    GetDefinitionsFulfilled: 'GET_DEFINITIONS_FULFILLED',

    PushDefinition:          'PUSH_DEFINITION',
    PushDefinitionRequested: 'PUSH_DEFINITION_REQUESTED',
    PushDefinitionRejected:  'PUSH_DEFINITION_REJECTED',
    PushDefinitionFulfilled: 'PUSH_DEFINITION_FULFILLED',
    
    GetQuestions:            'GET_QUESTIONS',
    GetQuestionsRequested:   'GET_QUESTIONS_REQUESTED',
    GetQuestionsRejected:    'GET_QUESTIONS_REJECTED',
    GetQuestionsFulfilled:   'GET_QUESTIONS_FULFILLED',

    GetLogin:                'GET_LOGIN',
    GetLoginRequested:       'GET_LOGIN_REQUESTED',
    GetLoginRejected:        'GET_LOGIN_REJECTED',
    GetLoginFulfilled:       'GET_LOGIN_FULFILLED',
};

export default ActionTypes;