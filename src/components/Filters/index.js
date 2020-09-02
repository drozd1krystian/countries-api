import React from "react";
import "./style.scss";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";

const Filters = (props) => {
  return (
    <div className="filters">
      <SearchBar />
      <DropDown />
    </div>
  );
};

export default Filters;
