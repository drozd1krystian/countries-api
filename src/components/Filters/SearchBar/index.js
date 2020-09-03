import React from "react";
import "./style.scss";
import { ReactComponent as SearchIcon } from "../../../assets/search-line.svg";

const SearchBar = ({ handleChange, ...otherProps }) => {
  return (
    <div className="search">
      <div className="search__wrapper">
        <SearchIcon className="search__icon" />
        <input
          type="text"
          {...otherProps}
          className="input"
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
