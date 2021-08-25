/* eslint-disable react/prop-types */
import React from "react";

function Arrows({ handleLeftArrow, handleRightArrow }) {
  const handleClick = (e) => {
    if (e.target.parentElement.id === "right-arrow") {
      handleRightArrow();
    } else if (e.target.parentElement.id === "left-arrow") {
      handleLeftArrow();
    }
  };
  return (
    <>
      <svg
        width="380"
        height="153"
        viewBox="0 0 1500 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="arrows-export">
          <g id="right-arrow" className="home__arrow" onClick={handleClick}>
            <rect
              id="Rectangle 10"
              x="1382"
              width="118"
              height="190"
              fill="#F8F5F2"
            />
            <path
              id="right-arrow_2"
              d="M1422.52 169.148L1471.75 94.8612M1422.52 21.7485L1471.75 96.035"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
          <g id="left-arrow" className="home__arrow" onClick={handleClick}>
            <rect id="Rectangle 11" width="118" height="190" fill="#F8F5F2" />
            <path
              id="left-arrow_2"
              d="M81.4837 169.148L32.2461 94.8612M81.4837 21.7485L32.2461 96.035"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </>
  );
}

export default Arrows;
