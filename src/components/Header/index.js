import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import { ReactComponent as MoonIcon } from "../../assets/moon-line.svg";

const Header = ({ handleChange, mode }) => {
  return (
    <header className="header">
      <div className="container wrapper">
        <nav className="header__links">
          <h1 className="header__links--logo">
            <Link className="link" to="/">
              Where in the world?
            </Link>
          </h1>
        </nav>
        <div className="theme__switch" onClick={handleChange}>
          <MoonIcon className="icon" />
          <span className="theme__type">{mode} Mode</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
