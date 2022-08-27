
import { legacy_createStore, applyMiddleware ,combineReducers} from "redux";
import {reducer as AppReducer} from "./AppReducer/reducer"
import {authReducer as AuthReducer } from "./AuthReducer/reducer";
import logger from 'redux-logger';
import thunk from "redux-thunk"

const middleware = [thunk]
if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ AppReducer, AuthReducer });
export const store = legacy_createStore (rootReducer,applyMiddleware(...middleware))



