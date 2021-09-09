/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

function ArticleList({ route }) {
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

  return (
    <aside className="blog__article-list-container">
      <div className="blog__article-list">
        {list &&
          list.map((update, index) => {
            return (
              <A href={`blog/${route}/${update.slug}`} key={index}>
                {update.title}
              </A>
            );
          })}
      </div>
    </aside>
  );
}

export default ArticleList;
