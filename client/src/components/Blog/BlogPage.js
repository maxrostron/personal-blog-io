/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import Content from "./blog-components/Content";
import ArticleList from "./blog-components/ArticleList";
import "./BlogPage.css";
import "react-quill/dist/quill.snow.css";
import BlogPageContextProvider, { BlogPageContext } from "./BlogPageContext";

function BlogPage({ contentType, postId }) {
  return (
    <div>
      <BlogPageContextProvider>
        <BlogPageContainer contentType={contentType} postId={postId} />
      </BlogPageContextProvider>
    </div>
  );
}

function BlogPageContainer({ contentType, postId }) {
  const blogContext = useContext(BlogPageContext);
  blogContext.setCurrentPage(contentType);
  blogContext.setCurrentPost(postId);
  console.log("contexttype");
  console.log(contentType);
  console.log(postId);

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
