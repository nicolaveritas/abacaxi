import { combineReducers } from 'redux';
import { fetchUsers as fetchUsersApi } from './api';
import { Users } from './types';

// actions
const FETCH_USERS = {
    REQUEST: "FETCH_USERS_REQUEST",
    SUCCESS: "FETCH_USERS_SUCCESS",
    FAILURE: "FETCH_USERS_FAILURE"
} as const;
const fetchUsersRequest = () => ({
    type: FETCH_USERS.REQUEST,
});

const fetchUsersSuccess = (users: Users) => ({
    type: FETCH_USERS.SUCCESS,
    payload: users,
});
const fetchUsersFailure = (error: Error) => ({
    type: FETCH_USERS.FAILURE,
    payload: error,
});

type FetchUsers = ReturnType<typeof fetchUsersRequest | typeof fetchUsersSuccess | typeof fetchUsersFailure>;

// thunks
const fetchUsers = () => async (dispatch: any) => {
    dispatch(fetchUsersRequest())
    try {
        const users = await fetchUsersApi();
        dispatch(fetchUsersSuccess(users))
    } catch(e) {
        dispatch(fetchUsersFailure(e))
    }
}

// reducers
type Status = 'READY' | 'FETCHING' | 'ERRORED';
const statusReducer = (
    state: Status = 'READY',
    action: FetchUsers
): Status => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST': {
            return 'FETCHING'
        }
        case 'FETCH_USERS_SUCCESS': {
            return 'READY'
        }
        case 'FETCH_USERS_FAILURE': {
            return 'ERRORED'
        }
        default: {
            return state;
        }
    }
}
const usersReducer = (state: Users = [], action: FetchUsers): Users => {
    switch (action.type) {
        case 'FETCH_USERS_SUCCESS': {
            return action.payload;
        }
        case 'FETCH_USERS_REQUEST':
        case 'FETCH_USERS_FAILURE': {
            return [];
        }
        default: {
            return state;
        }
    }
}
const dashboardReducer = combineReducers({
    status: statusReducer,
    users: usersReducer,
});
type DashboardModuleState = ReturnType<typeof dashboardReducer>

// selectors
const selectStatus = (state: DashboardModuleState) => state.status;
const selectUsers = (state: DashboardModuleState) => state.users;

export {
    fetchUsers,
    dashboardReducer,
    selectStatus,
    selectUsers,
}