/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { config } from "../../../../../Constants";

function LikeButton({ article }) {
  const [className, setClassName] = useState("blog__article-like-icon");
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(article.meta.likes);
  function handleClick() {
    liked === false ? likePost() : unlikePost();
  }

  const likePost = () => {
    setClassName("blog__article-like-icon-liked");
    setCount(count + 1);
    setLiked(true);

    axios
      .post(`${config.url.API_URL_BACK}/api/blog/like`, {
        id: `${article._id}`,
        likes: count + 1,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const unlikePost = () => {
    setClassName("blog__article-like-icon");
    setCount(count - 1);
    setLiked(false);

    axios
      .post(`${config.url.API_URL_BACK}/api/blog/like`, {
        id: `${article._id}`,
        likes: count - 1,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="blog__article-like-container" onClick={handleClick}>
      <svg
        className={className}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
      </svg>
      <span className="blog__article-like-span">{count}</span>
    </div>
  );
}

export default LikeButton;
