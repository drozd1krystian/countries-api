import React, { useEffect, useState } from "react";
import "./style.scss";
import arrowDown from "../../assets/arrow-down.svg";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scrollPosition = () => {
      window.scrollY > 0 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", scrollPosition);
    return () => window.removeEventListener("scroll", scrollPosition);
  }, []);

  return (
    <div
      className={showButton ? "scroll scroll--show" : "scroll scroll--hide"}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <img src={arrowDown} alt="Arrow Down" />
    </div>
  );
};

export default ScrollButton;
