import React, { useContext } from "react";
import { BlogPageContext } from "../../BlogPageContext";

function ContentHeader() {
  const blogContext = useContext(BlogPageContext);
  const pageHeader = `${blogContext.currentRequest} Title`;
  return (
    <header>
      <h1 className="blog__article-content-title">{pageHeader}</h1>
      <h2 className="blog__article-content-blurb">
        Lores Ipsum Lores Ipsum Lores Ipsum Lores Ipsum Lores Ipsum Lores Ipsum
        Lores Ipsum Lores Ipsum Lores Ipsum{" "}
      </h2>
      <h3 className="blog__article-content-date">25th August 2021</h3>
    </header>
  );
}

export default ContentHeader;
