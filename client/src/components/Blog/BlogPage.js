/* eslint-disable react/prop-types */
import React, { useContext } from "react";
// import Content from "./blog-components/Content";
import ArticleList from "./blog-components/ArticleList";
import "./BlogPage.css";
import "react-quill/dist/quill.snow.css";
import BlogPageContextProvider, { BlogPageContext } from "./BlogPageContext";

function BlogPage({ route, request }) {
  console.log(route);
  return (
    <div>
      <BlogPageContextProvider>
        <BlogPageContainer route={route} request={request} />
      </BlogPageContextProvider>
    </div>
  );
}

function BlogPageContainer({ route, request }) {
  const blogContext = useContext(BlogPageContext);
  blogContext.setCurrentRoute(route);
  blogContext.setCurrentRequest(request);

  console.log(route);

  return (
    <div className="blog__container">
      <header>
        <h1>{route === "updates" ? "Personal Updates" : "Living Essays"}</h1>
      </header>

      <section>
        <ArticleList route={route} />
        {/* <Content /> */}
      </section>
    </div>
  );
}

export default BlogPage;
