import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../modules/auth/redux';

const rootReducer = combineReducers({ authReducer });

export type RootState = ReturnType<typeof rootReducer>

export default createStore(
    rootReducer,
    composeWithDevTools()
);
