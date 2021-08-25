/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

function Title({ card, fadeIn }) {
  const [h1, setH1] = useState(null);
  const [h2, setH2] = useState(null);
  const [style, setStyle] = useState("");
  const [line, setLine] = useState("");
  let animation;

  useEffect(() => {
    console.log(`${card} is now displaying`);

    switch (card) {
      case "business":
        setH1("strategist");
        setH2(
          "Business strategy consultant who builds resilient & valuable companies."
        );
        setLine("underline");
        setStyle("");
        break;
      case "code":
        setH1("<developer>");
        setH2(
          "Full-stack Javascript developer who writes clean and elegant code."
        );
        setLine("");
        setStyle("");
        break;
      case "design":
        setH1("designer");
        setH2(
          "Digital innovation expert who creates and delivers delightful experiences."
        );
        setLine("");
        setStyle("italic");
    }
  }, [card]);

  if (fadeIn === true) {
    animation = "fadeIn";
  } else if (fadeIn === false) {
    animation = "fadeOut";
  }
  return (
    <>
      <h1
        style={{
          fontStyle: `${style}`,
          textDecorationLine: `${line}`,
          animation: `${animation} 1.5s`,
        }}
      >
        {h1}
      </h1>
      <h2
        style={{
          animation: `${animation} 1.5s`,
        }}
      >
        {h2}
      </h2>
    </>
  );
}

export default Title;
