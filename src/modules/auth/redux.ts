import { ActionType, createAction, getType } from "typesafe-actions";
import jwt_decode from "jwt-decode";

// actions
const SET_ID_TOKEN = "SET_ID_TOKEN";
const setIdToken = createAction(SET_ID_TOKEN)<string | null>();

// reducers 
interface AuthModuleState {
    idToken: string | null;
}
const authReducer = (state = { idToken: null }, action: ActionType<typeof setIdToken>): AuthModuleState => {
    switch(action.type) {
        case getType(setIdToken): {
            return {
                ...state,
                idToken: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

// slectors
const selectIdToken = (state: AuthModuleState) => state.idToken;
const selectUserName = (state: AuthModuleState) => 
    state.idToken ? jwt_decode<{ name: string }>(state.idToken)?.name : null;
const selectUserEmail = (state: AuthModuleState) => 
    state.idToken ? jwt_decode<{ email: string }>(state.idToken)?.email : null;

export { 
    setIdToken,
    authReducer,
    selectIdToken,
    selectUserName,
    selectUserEmail,
}