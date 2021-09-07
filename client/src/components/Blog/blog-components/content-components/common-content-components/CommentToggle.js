import React, { useContext } from "react";
import { BlogPageContext } from "../../../BlogPageContext";

function CommentToggle() {
  const blogContext = useContext(BlogPageContext);
  const articleClassName = `blog__content-toggle-tag ${
    blogContext.showComments ? "" : "selected"
  }`;
  const commentClassName = `blog__content-toggle-tag ${
    blogContext.showComments ? "selected" : ""
  }`;

  return (
    <div className="blog__content-toggle">
      <p
        className={articleClassName}
        onClick={() => blogContext.setShowComments(false)}
      >
        Article
      </p>
      |
      <div>
        <p
          className={commentClassName}
          onClick={() => blogContext.setShowComments(true)}
        >
          Comments
        </p>
        <div className="blog__content-toggle-counter">11</div>
      </div>
    </div>
  );
}

export default CommentToggle;
