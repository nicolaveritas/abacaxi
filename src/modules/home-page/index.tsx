import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DashboardPage from "../dashboard-page";
import SettingsPage from "../settings-page";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { PageLayout, SectionsWrapper } from "./elements";

function HomePage() {
  return (
    <PageLayout>
      <Header />
      <SectionsWrapper>
        <Sidebar />
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
      </SectionsWrapper>
    </PageLayout>
  );
}

export default HomePage;
