import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectIdToken } from "./redux";

interface PrivateRouteProps {
  children: React.ReactNode;
  [x: string]: any;
}

function ProtectedRoute({ children, ...rest }: PrivateRouteProps) {
  const idToken = useSelector<RootState>((state) =>
    selectIdToken(state.authReducer)
  );
  return (
    <Route
      {...rest}
      render={({ location }) =>
        idToken ? (
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
