/* eslint-disable react/prop-types */
import React, { useState } from "react";
import thumbsUp from "../assets/thumbs-up.svg";
import axios from "axios";
import "./Utilities.css";
import { config } from "../Constants";

function Upvote({ comment }) {
  const [votes, setVotes] = useState(comment.likes);
  const [liked, setLiked] = useState(false);

  const handleUpvote = () => {
    setVotes(votes + 1);
    setLiked(true);

    axios
      .post(`${config.url.API_URL_BACK}/api/blog/likecomment`, {
        comment: `${comment._id}`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div onClick={liked ? null : handleUpvote} className="utility__upvote">
        <img src={thumbsUp} alt="Thumbs up icon"></img>
        <p>{`Recommend ${votes}`}</p>
      </div>
    </>
  );
}

export default Upvote;
