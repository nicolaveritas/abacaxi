import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import DashboardPage from "../dashboard-page";
import SettingsPage from "../settings-page";
import LogoutButton from "../auth/LogoutButton";

function HomePage() {
  return (
    <>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>

        <LogoutButton />
      </ul>

      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Redirect
          from="/"
          to={{
            pathname: "/dashboard",
          }}
        />
      </Switch>
    </>
  );
}

export default HomePage;
