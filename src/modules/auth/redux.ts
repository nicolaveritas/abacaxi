import jwt_decode from "jwt-decode";

// actions
const SET_TOKENS = "SET_TOKENS" as const;
const setTokens = (tokenObj: { access_token: string; id_token: string } | null) => ({
    type: SET_TOKENS,
    payload: tokenObj,
});

// reducers 
interface AuthModuleState {
    idToken: string | null;
    accessToken: string | null;
}
const authReducer = (
    state: AuthModuleState = { idToken: null, accessToken: null }, 
    action: ReturnType<typeof setTokens>
): AuthModuleState => {
    switch(action.type) {
        case "SET_TOKENS": {
            return {
                ...state,
                idToken: action.payload?.id_token ?? null,
                accessToken: action.payload?.access_token ?? null
            }
        }
        default: {
            return state;
        }
    }
}

// slectors
const selectIdToken = (state: AuthModuleState) => state.idToken;
const selectAccessToken = (state: AuthModuleState) => state.accessToken;
const selectUserName = (state: AuthModuleState) => 
    state.idToken ? jwt_decode<{ name: string }>(state.idToken)?.name : null;
const selectUserEmail = (state: AuthModuleState) => 
    state.idToken ? jwt_decode<{ email: string }>(state.idToken)?.email : null;

export { 
    setTokens,
    authReducer,
    selectIdToken,
    selectAccessToken,
    selectUserName,
    selectUserEmail,
}