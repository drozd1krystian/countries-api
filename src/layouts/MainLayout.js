import React from "react";
import Header from "../components/Header";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div className="main">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
