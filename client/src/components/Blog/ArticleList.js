/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

function ArticleList({ route, setArticle }) {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/${route}`)
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        let tempList = [];
        data.forEach((blog) => {
          tempList.push(blog.meta);
        });

        setList(tempList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [route]);

  const handleClick = (route, update) => (e) => {
    e.preventDefault();
    const article = `${route}/${update.slug}`;
    setArticle(article);
  };

  return (
    <aside className="blog__article-list-container">
      <div className="blog__article-list">
        {list &&
          list.map((update, index) => {
            return (
              <A
                href={`http://localhost:3000/blog/${route}/${update.slug}`}
                key={index}
                onClick={handleClick(route, update)}
              >
                {update.title}
              </A>
            );
          })}
      </div>
    </aside>
  );
}

export default ArticleList;
