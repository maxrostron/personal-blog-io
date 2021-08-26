/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import CodeColor from "./carousel-assets/home__code-color.png";
import CodeWords from "./carousel-assets/home__code-words.png";
import BusinessColor from "./carousel-assets/home__business-color.png";
import BusinessWords from "./carousel-assets/home__business-words.png";
import DesignColor from "./carousel-assets/home__design-color.png";
import DesignWords from "./carousel-assets/home__design-words.png";

function Card({ card, fadeIn }) {
  const [wordsSrc, setWordsSrc] = useState(null);
  const [colorSrc, setColorSrc] = useState(null);
  let animation;

  useEffect(() => {
    console.log(`${card} is now displaying`);

    switch (card) {
      case "business":
        setWordsSrc(BusinessWords);
        setColorSrc(BusinessColor);
        break;
      case "code":
        setWordsSrc(CodeWords);
        setColorSrc(CodeColor);
        break;
      case "design":
        setWordsSrc(DesignWords);
        setColorSrc(DesignColor);
    }
  }, [card]);

  if (fadeIn === true) {
    animation = "fadeIn";
  } else if (fadeIn === false) {
    animation = "fadeOut";
  }

  return (
    <>
      <img
        src={wordsSrc}
        className="home__carousel-words"
        style={{
          animation: `${animation} 1.5s, carousel-words 7s linear infinite alternate`,
        }}
      />
      <img
        src={colorSrc}
        className="home__carousel-filter"
        style={{
          animation: `${animation} 1.5s`,
        }}
      />
    </>
  );
}

export default Card;
