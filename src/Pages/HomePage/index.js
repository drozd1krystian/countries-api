import React from "react";
import "./style.scss";
import Filters from "../../components/Filters";
import Countries from "../../components/Countries";

const HomePage = (props) => {
  return (
    <div className="page">
      <Filters />
      <Countries />
    </div>
  );
};

export default HomePage;
