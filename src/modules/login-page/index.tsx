import React from "react";
import LoginButton from "../auth/LoginButton";
import { Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIdToken } from "../auth/redux";
import { FormWrapper, Header, Logo, StyledLoginPage } from "./elements";
import { Text } from "../../components/elements";

function LoginPage() {
  const idToken = useSelector((state: RootState) => selectIdToken(state.auth));
  const location = useLocation<{ from: { pathname: string } }>();
  const { from } = location.state || { from: { pathname: "/" } };

  return !idToken ? (
    <StyledLoginPage>
      <FormWrapper>
        <Header>
          <Logo />
          <Text>Sign in</Text>
        </Header>
        <LoginButton />
      </FormWrapper>
    </StyledLoginPage>
  ) : (
    <Redirect
      to={{
        pathname: from.pathname,
        state: { from },
      }}
    />
  );
}

export default LoginPage;
