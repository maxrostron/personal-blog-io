/* eslint-disable react/prop-types */
import React, { lazy, Suspense, useEffect, useState } from "react";
import ContentHeader from "./blog-articles/article-components/ContentHeader";
import CommentToggle from "./blog-articles/article-components/CommentToggle";

function Content({ article }) {
  const [mdxFile, setMdxFile] = useState("Introduction");

  const Article = lazy(() =>
    import(
      "!babel-loader!@mdx-js/loader!./blog-articles/article-mdx/" +
        mdxFile +
        ".mdx"
    )
  );

  console.log(mdxFile);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/${article}`)
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        setMdxFile(data.mdx.component);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [article]);

  return (
    <section className="blog__content-container">
      <ContentHeader />
      <CommentToggle />
      <Suspense fallback={<div>Loading...</div>}>
        <Article />
      </Suspense>
    </section>
  );
}

export default Content;
