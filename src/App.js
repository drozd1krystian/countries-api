import React from "react";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";

function App() {
  return (
    <div className="light__theme" id="app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <HomePage />
            </MainLayout>
          )}
        ></Route>
        <Route
          exact
          path="/:name"
          render={() => (
            <MainLayout>
              <DetailsPage />
            </MainLayout>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
