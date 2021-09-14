import React from "react";
import heart from "../../article-assets/heart.svg";

function LikeButton() {
  return (
    <div className="blog__article-like-container">
      <span className="blog__article-like-span">Give this post a like!</span>
      <img className="blog__article-like-icon" src={heart} />
    </div>
  );
}

export default LikeButton;
