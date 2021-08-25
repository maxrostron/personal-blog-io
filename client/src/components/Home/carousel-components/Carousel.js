import React, { useState } from "react";
import Body from "./carousel-assets/home__carousel-body.png";
import Scenery from "./carousel-assets/home__carousel-scenery.png";
import Card from "./Card";
// import Circle from "./Circle";
import Arrows from "./Arrows";
import Title from "./Title";

function Carousel() {
  const [card, setCard] = useState("code");
  const [fadeIn, setFadeIn] = useState(true);

  function handleRightArrow() {
    setFadeIn(!fadeIn);
    setTimeout(() => {
      setFadeIn(true);
      if (card === "business") {
        setCard("code");
      } else if (card === "code") {
        setCard("design");
      } else if (card === "design") {
        setCard("business");
      }
    }, 1500);
  }

  function handleLeftArrow() {
    setFadeIn(!fadeIn);
    setTimeout(() => {
      setFadeIn(true);
      if (card === "business") {
        setCard("design");
      } else if (card === "code") {
        setCard("business");
      } else if (card === "design") {
        setCard("code");
      }
    }, 1500);
  }

  return (
    <div className="home__carousel">
      {/* <div className="home__circle-container">
        <Circle />
      </div> */}
      <div className="home__name-container">
        <h1>Hey, I&apos;m Max</h1>
      </div>
      <div className="home__arrows-container">
        <Arrows
          handleLeftArrow={handleLeftArrow}
          handleRightArrow={handleRightArrow}
        />
      </div>
      <div className="home__carousel-images">
        <img src={Scenery} className="home__carousel-scenery" />
        <img src={Body} className="home__carousel-body" />
        <Card card={card} fadeIn={fadeIn} />
      </div>
      <div className="home__title-container">
        <Title card={card} fadeIn={fadeIn} />
      </div>
    </div>
  );
}

export default Carousel;
