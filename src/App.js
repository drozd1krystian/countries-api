import React from "react";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import Filters from "./components/Filters";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Filters />
      </MainLayout>
    </div>
  );
}

export default App;
