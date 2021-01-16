import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "./constants";
import { setIdToken } from "./redux";

function LogoutButton() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogoutSuccess = () => {
    dispatch(setIdToken(null));
    history.replace({ pathname: "/login" });
  };

  return (
    <GoogleLogout
      clientId={CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
    />
  );
}

export default LogoutButton;
