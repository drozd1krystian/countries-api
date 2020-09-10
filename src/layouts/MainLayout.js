import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import ScrollButton from "../components/ScrollButton";

const MainLayout = (props) => {
  const { children } = props;

  const changeTheme = () => {
    let appClass = document.getElementById("app");
    appClass.className =
      appClass.className === "light__theme" ? "dark__theme" : "light__theme";
  };

  const pageVariants = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
      x: `-100vw`,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <div className="container">
      <Header mode={"Dark"} handleChange={changeTheme} />
      <motion.div
        className="main"
        s
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        {children}
      </motion.div>
      <ScrollButton />
    </div>
  );
};

export default MainLayout;
