import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

const MainLayout = (props) => {
  const { children } = props;
  const pageVariants = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="main"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="container">
        <Header />
        {children}
      </div>
    </motion.div>
  );
};

export default MainLayout;
