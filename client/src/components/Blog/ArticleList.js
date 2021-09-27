/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import { A } from "hookrouter";
import { config } from "../../Constants";

function ArticleList() {
  const [list, setList] = useState(null);
  const [filters, setFilters] = useState(null);
  const yearsArray = [];

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    fetch(`${config.url.API_URL_BACK}/api/blog`)
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        let tempList = [];
        data.forEach((blog) => {
          blog.meta.date = Date.parse(blog.meta.date);
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
    fetch(`${config.url.API_URL_BACK}/api/blog/?category=${filter}`)
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        let tempList = [];
        data.forEach((blog) => {
          blog.meta.date = Date.parse(blog.meta.date);
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
          list
            .sort((a, b) => b.date - a.date)
            .map((article, index) => {
              return (
                <>
                  {renderYear(article.publishedOnYear)}
                  <div className="blog__article-list-item">
                    <p>{format(new Date(article.date), "d MMM")}</p>
                    <A
                      href={`${config.url.API_URL_FRONT}/blog/${article.slug}`}
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
