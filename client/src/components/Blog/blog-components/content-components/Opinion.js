import React from "react";
import Upvote from "../../../../utils/Upvote";
import headshot from "../blog-assets/headshot.png";

function Opinion() {
  return (
    <div className="blog__opinion">
      <div className="blog__opinion-top">
        <div className="blog__opinion-top-line"></div>
      </div>
      <div className="blog__opinion-bottom">
        <div className="blog__opinion-bottom-left">
          <img src={headshot} alt="Picture of author" />
          <div className="blog__opinion-bottom-line" />
        </div>
        <div className="blog__opinion-bottom-right">
          <div className="blog__opinion-data-container">
            <div className="blog__opinion-data">
              <div className="blog__opinion-post-author">Max Rostron</div>
              <div className="blog__opinion-post-date">17h</div>
            </div>
            <div className="blog__opinion-post-count">#1</div>
          </div>
          <div className="blog__opinion-content">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam
            vehicula ipsum
          </div>
          <Upvote />
        </div>
      </div>
    </div>
  );
}

export default Opinion;
