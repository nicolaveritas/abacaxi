import React from "react";
import LoginButton from "../auth/LoginButton";
import { Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIdToken } from "../auth/redux";
import { RootState } from "../../redux/store";

function LoginPage() {
  const idToken = useSelector<RootState>((state) =>
    selectIdToken(state.authReducer)
  );
  const location = useLocation<{ from: { pathname: string } }>();

  return !idToken ? (
    <>
      <div>Welcome to PLAYTOMIC test</div>
      <LoginButton />
    </>
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { from: location },
      }}
    />
  );
}

export default LoginPage;
