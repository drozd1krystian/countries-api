import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as MoonIcon } from "../../assets/moon-line.svg";

const Header = (props) => {
  const [theme, setTheme] = useState("light__theme");
  const changeTheme = () => {
    theme === "light__theme"
      ? setTheme("dark__theme")
      : setTheme("light__theme");
    document.getElementById("app").className = theme;
  };

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
        <div className="theme__switch" onClick={changeTheme}>
          <MoonIcon className="icon" />
          <span className="theme__type">
            {theme === "light__theme" ? "Light" : "Dark"} Mode
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
