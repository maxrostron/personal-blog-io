/* eslint-disable react/prop-types */
import React from "react";
import Content from "./Content";
import ArticleList from "./ArticleList";
import "./BlogPage.css";
import "react-quill/dist/quill.snow.css";
import { A } from "hookrouter";

function BlogPage({ slug }) {
  console.log(slug);
  return (
    <div className="blog__container">
      <>
        {slug === undefined ? (
          <ArticleList slug={slug} />
        ) : (
          <section className="blog__content-container">
            <A href={"/blog"}>&#171; Return to blogs</A>
            <Content slug={slug} />
          </section>
        )}
      </>
    </div>
  );
}

export default BlogPage;
