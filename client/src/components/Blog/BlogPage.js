/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Content from "./blog-components/Content";
import ArticleList from "./blog-components/ArticleList";
import "./BlogPage.css";
import "react-quill/dist/quill.snow.css";

function BlogPage({ page }) {
  console.log(page);

  const [currentPage, setCurrentPage] = useState({ page });
  return (
    <div className="blog__container">
      <header>
        <h1>Blog</h1>
        <h2></h2>
      </header>
      <section>
        <ArticleList
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Content currentPage={currentPage} />
      </section>
    </div>
  );
}

export default BlogPage;
