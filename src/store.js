import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";
import rootReducer from './reducers/root-reducer';

const logger = createLogger();

const store = createStore(rootReducer,
    {
        definitions: {},
        questions: {}
    },
    applyMiddleware(thunk, logger)
);

export default store;