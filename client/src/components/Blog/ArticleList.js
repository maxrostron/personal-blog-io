/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

function ArticleList() {
  const [list, setList] = useState(null);
  const [filters, setFilters] = useState(null);
  const yearsArray = [];

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    fetch(`http://localhost:5000/api/blog`)
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        let tempList = [];
        data.forEach((blog) => {
          tempList.push(blog.meta);
        });
        setList(tempList);
        return tempList;
      })
      .then((list) => {
        let tempArray = [];
        list.forEach((element) => {
          if (tempArray.indexOf(element.category) === -1) {
            tempArray.push(element.category);
          }
        });
        setFilters(tempArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderYear = (year) => {
    if (yearsArray.includes(year)) {
      return null;
    } else {
      yearsArray.push(year);
      return <h1>{year}</h1>;
    }
  };

  const handleFilter = (category) => {
    const filter = category;
    fetch(`http://localhost:5000/api/blog/?category=${filter}`)
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        let tempList = [];
        data.forEach((blog) => {
          tempList.push(blog.meta);
        });
        setList(tempList);
        return tempList;
      });
  };

  return (
    <section className="blog__article-list-container">
      <div className="blog__article-list-filters">
        <p onClick={() => handleFetch()}>All</p>
        {filters &&
          filters.map((category, index) => {
            return (
              <p key={index} onClick={() => handleFilter(category)}>
                {category}
              </p>
            );
          })}
      </div>

      <div className="blog__article-list">
        {list &&
          list.map((article, index) => {
            return (
              <>
                {renderYear(article.publishedOnYear)}
                <div className="blog__article-list-item">
                  <p>
                    {article.publishedOnDay}{" "}
                    {article.publishedOnMonth.substring(0, 3)}
                  </p>
                  <A
                    href={`http://localhost:3000/blog/${article.slug}`}
                    key={index}
                  >
                    {article.title}
                  </A>
                </div>
              </>
            );
          })}
      </div>
    </section>
  );
}

export default ArticleList;
