import React from "react";
import Header from "../components/Header";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div className="main">
      <div className="container">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
