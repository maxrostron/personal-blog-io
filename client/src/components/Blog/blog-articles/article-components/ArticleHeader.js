/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

function ArticleHeader({ article }) {
  const [contents, setContents] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/${article}`)
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        setContents(data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [article]);

  if (contents === null) {
    return null;
  }

  console.log(article);
  return (
    <header>
      <h1 className="blog__article-content-title">{contents.meta.title}</h1>
      <h2 className="blog__article-content-blurb">{contents.meta.abstract}</h2>
      <h3 className="blog__article-content-date">
        {contents.meta.publishedOn}
      </h3>
    </header>
  );
}

export default ArticleHeader;
