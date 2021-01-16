import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./modules/login-page";
import HomePage from "./modules/home-page";
import ProtectedRoute from "./modules/auth/ProtectedRoute";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ProtectedRoute path="/">
            <HomePage />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
