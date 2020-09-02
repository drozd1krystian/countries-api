import React from "react";
import "./style.scss";

const SearchBar = ({ handleChange, ...otherProps }) => {
  return (
    <div className="search">
      <div className="search__wrapper">
        <span className="search__icon" />
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
