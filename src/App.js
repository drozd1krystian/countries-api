import React, { useEffect } from "react";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import { fetchDataStart } from "./redux/Countries/countries.actions";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

const mapState = ({ countries }) => ({
  isLoading: countries.isLoading,
  region: countries.region,
  name: countries.name,
});

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { region, name, isLoading } = useSelector(mapState);

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchDataStart({ region, name }));
    }
  }, [dispatch, region, name, isLoading]);

  return (
    <div className="light__theme" id="app">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
};

export default App;
