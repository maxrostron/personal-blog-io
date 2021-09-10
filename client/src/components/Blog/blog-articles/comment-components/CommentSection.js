import React from "react";
import Comment from "./Comment";
import CommentCreator from "./CommentCreator";

function CommentSection() {
  return (
    <section>
      <CommentCreator />
      <Comment />
    </section>
  );
}

export default CommentSection;
