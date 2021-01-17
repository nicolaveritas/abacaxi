import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from '../modules/auth/redux';
import { dashboardReducer } from '../modules/dashboard-page/redux';
import { settingsReducer } from '../modules/settings-page/redux';

const rootReducer = combineReducers({ 
    auth: authReducer,
    dashboard: dashboardReducer,
    settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
