/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

function ArticleList() {
  return (
    <aside className="blog__article-list-container">
      <div className="blog__article-list-toggle">
        <h1 className="blog__article-list-toggle-selected">Opinions</h1>|
        <h1 className="blog__article-list-toggle-notselected">Updates</h1>|
        <h1 className="blog__article-list-toggle-notselected">Essays</h1>
      </div>
      <ul className="blog__article-list">
        <li>Placeholder Article Name</li>
        <li>Placeholder Article Name</li>
        <li>Placeholder Article Name</li>
        <li>Placeholder Article Name</li>
      </ul>
    </aside>
  );
}

export default ArticleList;
