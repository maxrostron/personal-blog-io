/* eslint-disable react/prop-types */
import React, { lazy, Suspense, useEffect, useState } from "react";

function Content({ slug }) {
  const [mdxFile, setMdxFile] = useState("Introduction");
  const [article, setArticle] = useState(null);

  const Article = lazy(() =>
    import(
      "!babel-loader!@mdx-js/loader!./blog-articles/article-mdx/" +
        mdxFile +
        ".mdx"
    )
  );

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/${slug}`)
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        setMdxFile(data.meta.componentName);
        setArticle(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [slug]);

  return (
    <article className="blog__content-article">
      <Suspense fallback={<></>}>
        <Article article={article} />
      </Suspense>
    </article>
  );
}

export default Content;
