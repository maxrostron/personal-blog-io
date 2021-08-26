import React, { useState } from "react";
import Article from "./Article";
import CommentSection from "./CommentSection";

function Content() {
  const [showComments, setShowComments] = useState(false);

  return (
    <section className="blog__content-container">
      <header>
        <h1 className="blog__article-content-title">Article Title</h1>
        <h2 className="blog__article-content-blurb">
          Lores Ipsum Lores Ipsum Lores Ipsum Lores Ipsum Lores Ipsum Lores
          Ipsum Lores Ipsum Lores Ipsum Lores Ipsum{" "}
        </h2>
        <h3 className="blog__article-content-date">25th August 2021</h3>
      </header>
      <div className="blog__content-toggle">
        <p
          className={`blog__content-toggle-tag ${
            showComments ? "" : "selected"
          }`}
          onClick={() => setShowComments(false)}
        >
          Article
        </p>
        |
        <div>
          <p
            className={`blog__content-toggle-tag ${
              showComments ? "selected" : ""
            }`}
            onClick={() => setShowComments(true)}
          >
            Comments
          </p>
          <div className="blog__content-toggle-counter">11</div>
        </div>
      </div>
      <>{showComments ? <CommentSection /> : <Article />}</>
    </section>
  );
}

export default Content;
