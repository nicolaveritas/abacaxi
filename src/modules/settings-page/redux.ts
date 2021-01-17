import { AnyAction, combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchUserInfo as fetchUserInfoApi } from './api';
import { UserInfo } from './types';

// actions
const FETCH_USER_INFO = {
    REQUEST: "FETCH_USER_INFO_REQUEST",
    SUCCESS: "FETCH_USER_INFO_SUCCESS",
    FAILURE: "FETCH_USER_INFO_FAILURE"
} as const;
const fetchUsersRequest = () => ({
    type: FETCH_USER_INFO.REQUEST,
});

const fetchUsersSuccess = (users: UserInfo) => ({
    type: FETCH_USER_INFO.SUCCESS,
    payload: users,
});
const fetchUsersFailure = (error: Error) => ({
    type: FETCH_USER_INFO.FAILURE,
    payload: error,
});

type FetchUserInfo = ReturnType<typeof fetchUsersRequest | typeof fetchUsersSuccess | typeof fetchUsersFailure>;

// thunks
const fetchUserInfo = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => RootState) => {
    dispatch(fetchUsersRequest())
    try {
        const accessToken = getState().auth.accessToken;
        const users = await fetchUserInfoApi(accessToken ?? "");
        dispatch(fetchUsersSuccess(users))
    } catch(e) {
        dispatch(fetchUsersFailure(e))
    }
}

// reducers
type Status = 'READY' | 'FETCHING' | 'ERRORED';
const statusReducer = (
    state: Status = 'READY',
    action: FetchUserInfo
): Status => {
    switch (action.type) {
        case 'FETCH_USER_INFO_REQUEST': {
            return 'FETCHING'
        }
        case 'FETCH_USER_INFO_SUCCESS': {
            return 'READY'
        }
        case 'FETCH_USER_INFO_FAILURE': {
            return 'ERRORED'
        }
        default: {
            return state;
        }
    }
}
const usersInfoReducer = (state: UserInfo | null = null, action: FetchUserInfo): UserInfo | null => {
    switch (action.type) {
        case 'FETCH_USER_INFO_SUCCESS': {
            return action.payload;
        }
        case 'FETCH_USER_INFO_REQUEST':
        case 'FETCH_USER_INFO_FAILURE': {
            return null;
        }
        default: {
            return state;
        }
    }
}
const settingsReducer = combineReducers({
    status: statusReducer,
    userInfo: usersInfoReducer,
});
type SettingsModuleState = ReturnType<typeof settingsReducer>

// selectors
const selectStatus = (state: SettingsModuleState) => state.status;
const selectUserInfo = (state: SettingsModuleState) => state.userInfo;

export {
    fetchUserInfo,
    settingsReducer,
    selectStatus,
    selectUserInfo,
}