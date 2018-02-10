const ActionTypes = {
    FlashMessage: 'FLASH_MESSAGE',

    GetDefinitions:   'GET_DEFINITIONS',
    GetDefinitionsRequested: 'GET_DEFINITIONS_REQUESTED',
    GetDefinitionsRejected: 'GET_DEFINITIONS_REJECTED',
    GetDefinitionsFulfilled: 'GET_DEFINITIONS_FULFILLED',
    
    GetQuestions:   'GET_QUESTIONS',
    GetQuestionsRequested: 'GET_QUESTIONS_REQUESTED',
    GetQuestionsRejected: 'GET_QUESTIONS_REJECTED',
    GetQuestionsFulfilled: 'GET_QUESTIONS_FULFILLED',

    GetUsers:   'GET_USERS',
    GetUsersRequested: 'GET_USERS_REQUESTED',
    GetUsersRejected: 'GET_USERS_REJECTED',
    GetUsersFulfilled: 'GET_USERS_FULFILLED',
    AddUser:   'ADD_USER',
    AddUserRequested: 'ADD_USER_REQUESTED',
    AddUserRejected: 'ADD_USER_REJECTED',
    UpdateUser:   'UPDATE_USER',
    UpdateUserRequested: 'UPDATE_USER_REQUESTED',
    UpdateUserRejected: 'UPDATE_USER_REJECTED',
    DeleteUser:   'DELETE_USER',
    DeleteUserRequested: 'DELETE_USER_REQUESTED',
    DeleteUserRejected: 'DELETE_USER_REJECTED',

    GetLogin:   'GET_LOGIN',
    GetLoginRequested: 'GET_LOGIN_REQUESTED',
    GetLoginRejected: 'GET_LOGIN_REJECTED',
    GetLoginFulfilled: 'GET_LOGIN_FULFILLED',
};

export default ActionTypes;