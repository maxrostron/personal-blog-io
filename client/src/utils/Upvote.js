import React, { useState } from "react";
import thumbsUp from "../assets/thumbs-up.svg";
import "./Utilities.css";

function Upvote() {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    const newVoteCount = votes + 1;
    setVotes(newVoteCount);
  };
  return (
    <>
      <div onClick={handleUpvote} className="utility__upvote">
        <img src={thumbsUp} alt="Thumbs up icon"></img>
        <p>{`Recommend ${votes}`}</p>
      </div>
    </>
  );
}

export default Upvote;
