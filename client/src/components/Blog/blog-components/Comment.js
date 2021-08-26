import React, { useState } from "react";
import Upvote from "./blog-assets/thumbs-up.svg";

function Comment() {
  const [hide, setHide] = useState(false);
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    const newVoteCount = votes + 1;
    setVotes(newVoteCount);
  };

  return (
    <div className="blog__comment">
      <div className="blog__comment-collapse" onClick={() => setHide(!hide)}>
        {hide ? "+" : "-"}
      </div>
      <div className="blog__comment-main">
        <div>
          <h1 className="blog__comment-author">John Smith</h1>
          <p className="blog__comment-timestamp">3 hours ago</p>
        </div>
        {hide ? null : (
          <>
            <p className="blog__comment-content">
              Lores ipsum Lores ipsum Lores ipsum Lores ipsum Lores ipsum Lores
              ipsum Lores ipsum Lores ipsum Lores ipsum Lores ipsum Lores ipsum
              Lores ipsum Lores ipsum Lores ipsum Lores ipsum Lores ipsum Lores
              ipsum Lores ipsum Lores ipsum Lores ipsum Lores ipsum Lores ipsum
              Lores ipsum Lores ipsum Lores ipsum Lores ipsum Lores ipsum Lores
              ipsum{" "}
            </p>
            <div className="blog__comment-socials">
              <div onClick={handleUpvote}>
                <img src={Upvote} alt="Thumbs up icon"></img>
                <p>{`Recommend ${votes}`}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
