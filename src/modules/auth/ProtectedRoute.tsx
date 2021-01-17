import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "./redux";

interface PrivateRouteProps {
  children: React.ReactNode;
  [x: string]: any;
}

function ProtectedRoute({ children, ...rest }: PrivateRouteProps) {
  const isAuthenticated = useSelector((state: RootState) =>
    selectIsAuthenticated(state.auth)
  );
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
