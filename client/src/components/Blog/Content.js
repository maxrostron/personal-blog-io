/* eslint-disable react/prop-types */
import React, { lazy, Suspense, useEffect, useState } from "react";

function Content({ article, request }) {
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
    if (request === undefined) {
      setMdxFile("Introduction");
    } else {
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
    }
  }, [request]);

  return (
    <section className="blog__content-container">
      <Suspense fallback={<></>}>
        <Article article={article} />
      </Suspense>
    </section>
  );
}

export default Content;
