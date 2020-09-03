import React from "react";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="dark__theme" id="app">
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
      </Switch>
    </div>
  );
}

export default App;
