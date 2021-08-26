import React from "react";
import Content from "./blog-components/Content";
import ArticleList from "./blog-components/ArticleList";
import "./BlogPage.css";

function BlogPage() {
  return (
    <div className="blog__container">
      <header>
        <h1>Blog</h1>
        <h2></h2>
      </header>
      <section>
        <ArticleList />
        <Content />
      </section>
    </div>
  );
}

export default BlogPage;
