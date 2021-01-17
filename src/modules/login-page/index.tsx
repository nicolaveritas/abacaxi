import React from "react";
import LoginButton from "../auth/LoginButton";
import { Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../auth/redux";
import { FormWrapper, Header, Logo, StyledLoginPage } from "./elements";
import { Text } from "../../components/elements";

function LoginPage() {
  const isAuthenticated = useSelector((state: RootState) =>
    selectIsAuthenticated(state.auth)
  );
  const location = useLocation<{ from: { pathname: string } }>();
  const { from } = location.state || { from: { pathname: "/" } };

  return isAuthenticated ? (
    <Redirect
      to={{
        pathname: from.pathname,
        state: { from },
      }}
    />
  ) : (
    <StyledLoginPage>
      <FormWrapper>
        <Header>
          <Logo />
          <Text>Sign in</Text>
        </Header>
        <LoginButton />
      </FormWrapper>
    </StyledLoginPage>
  );
}

export default LoginPage;
