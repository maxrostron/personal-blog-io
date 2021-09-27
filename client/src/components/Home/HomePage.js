import React from "react";
import Carousel from "./carousel-components/Carousel";
import "./HomePage.css";
import "./carousel-components/HomeCarousel.css";
import UpdateBox from "./updates-components/UpdateBox";
import "./updates-components/HomeUpdateBox.css";

function HomePage() {
  console.log(process.env);
  return (
    <div className="home">
      <Carousel />
      <UpdateBox />
    </div>
  );
}

export default HomePage;
