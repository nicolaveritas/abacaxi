import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { CLIENT_ID } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { setIdToken, selectIdToken } from "./redux";
import { RootState } from "../../redux/store";

const isGoogleLoginRespone = (
  response: any
): response is GoogleLoginResponse => {
  return response.tokenObj !== undefined;
};

function LoginButton() {
  const dispatch = useDispatch();
  const idToken = useSelector((state: RootState) => selectIdToken(state.auth));

  const onLoginSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if (isGoogleLoginRespone(response)) {
      dispatch(setIdToken(JSON.stringify(response.tokenId)));
    }
  };

  const onLoginFailure = () => alert("login failure");

  const history = useHistory();
  const location = useLocation<{ from: { pathname: string } }>();
  const { from } = location.state || { from: { pathname: "/" } };
  useEffect(() => {
    if (idToken) {
      history.replace(from);
    }
  }, [idToken, from, history]);

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login with google"
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn
    />
  );
}

export default LoginButton;
