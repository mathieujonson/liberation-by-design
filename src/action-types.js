const ActionTypes = {
    FlashMessage:              'FLASH_MESSAGE',

    GetDefinitions:            'GET_DEFINITIONS',
    GetDefinitionsRequested:   'GET_DEFINITIONS_REQUESTED',
    GetDefinitionsRejected:    'GET_DEFINITIONS_REJECTED',
    GetDefinitionsFulfilled:   'GET_DEFINITIONS_FULFILLED',

    PushDefinition:            'PUSH_DEFINITION',
    PushDefinitionRequested:   'PUSH_DEFINITION_REQUESTED',
    PushDefinitionRejected:    'PUSH_DEFINITION_REJECTED',
    PushDefinitionFulfilled:   'PUSH_DEFINITION_FULFILLED',

    DeleteDefinition:          'PUSH_DEFINITION',
    DeleteDefinitionRequested: 'PUSH_DEFINITION_REQUESTED',
    DeleteDefinitionRejected:  'PUSH_DEFINITION_REJECTED',
    DeleteDefinitionFulfilled: 'PUSH_DEFINITION_FULFILLED',

    GetQuestions:              'GET_QUESTIONS',
    GetQuestionsRequested:     'GET_QUESTIONS_REQUESTED',
    GetQuestionsRejected:      'GET_QUESTIONS_REJECTED',
    GetQuestionsFulfilled:     'GET_QUESTIONS_FULFILLED',

    PushQuestion:              'PUSH_QUESTION',
    PushQuestionRequested:     'PUSH_QUESTION_REQUESTED',
    PushQuestionRejected:      'PUSH_QUESTION_REJECTED',
    PushQuestionFulfilled:     'PUSH_QUESTION_FULFILLED',

    DeleteQuestion:            'PUSH_QUESTION',
    DeleteQuestionRequested:   'PUSH_QUESTION_REQUESTED',
    DeleteQuestionRejected:    'PUSH_QUESTION_REJECTED',
    DeleteQuestionFulfilled:   'PUSH_QUESTION_FULFILLED',

    GetLogin:                  'GET_LOGIN',
    GetLoginRequested:         'GET_LOGIN_REQUESTED',
    GetLoginRejected:          'GET_LOGIN_REJECTED',
    GetLoginFulfilled:         'GET_LOGIN_FULFILLED',

    GetUsers:                  'GET_USERS',
    GetUsersRequested:         'GET_USERS_REQUESTED',
    GetUsersRejected:          'GET_USERS_REJECTED',
    GetUsersFulfilled:         'GET_USERS_FULFILLED',

    AddUser:                   'ADD_USER',
    AddUserRequested:          'ADD_USER_REQUESTED',
    AddUserRejected:           'ADD_USER_REJECTED',
    AddUserFulfilled:          'ADD_USER_FULFILLED',

    UpdateUser:                'UPDATE_USER',
    UpdateUserRequested:       'UPDATE_USER_REQUESTED',
    UpdateUserRejected:        'UPDATE_USER_REJECTED',
    UpdateUserFulfilled:       'UPDATE_USER_FULFILLED',

    UpdateQuestion: 'UPDATE_QUESTION',
    
    GetDefinition:            'GET_DEFINITION',
    GetDefinitionRequested:   'GET_DEFINITION_REQUESTED',
    GetDefinitionRejected:    'GET_DEFINITION_REJECTED',
    GetDefinitionFulfilled:   'GET_DEFINITION_FULFILLED',
};

export default ActionTypes;