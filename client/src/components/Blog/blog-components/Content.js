/* eslint-disable react/prop-types */
import React, { useState } from "react";
import EssayOrUpdate from "./content-components/EssayOrUpdate";
import CommentSection from "./comment-components/CommentSection";
import Opinion from "./content-components/Opinion";

function Content({ currentPage }) {
  const [showComments, setShowComments] = useState(false);

  //THIS NEEDS CLEANING UP!!! WONT WORK IN REALITY BUT WORKS FOR NOW
  //think about making one component for each opinions, updates and essays reusing similar sub components like title, date etc. Then direct to the relevant component (opinionPage.js Updatepage.js etc.)
  function contentRender() {
    if (!showComments && currentPage === "opinions") {
      return <Opinion />;
    } else if (!showComments) {
      return <EssayOrUpdate />;
    } else {
      return <CommentSection />;
    }
  }

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
      <>{contentRender()}</>
    </section>
  );
}

export default Content;
