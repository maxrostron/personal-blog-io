/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { navigate } from "hookrouter";

function Update({ article }) {
  const [isNew, setIsNew] = useState(null);
  const dateConversion = () => {
    const parts = new Date(article.date).toDateString().split(" ");
    const date = parts[2] + " " + parts[1] + " " + parts[3];
    return date;
  };

  useEffect(() => {
    const todaysDate = new Date();
    const articleDate = new Date(article.date);
    const difference_in_time = todaysDate.getTime() - articleDate.getTime();
    const difference_in_days = difference_in_time / (1000 * 3600 * 24);
    difference_in_days < 30 ? setIsNew(true) : setIsNew(false);
  }, []);

  return (
    <div
      className="home__update"
      onClick={() => navigate(`http://localhost:3000/blog/${article.slug}`)}
    >
      <div className="home__update-color"></div>
      <div className="home__update-content">
        <div className="home__update-data">
          <h3 className="home__update-path">{`blog//${article.category}`}</h3>
          <h3 className="home__update-date">{dateConversion()}</h3>
          {isNew && <div className="home__update-new">NEW</div>}
        </div>
        <h1 className="home__update-title">{article.title}</h1>
        <h2 className="home__update-blurb">{article.abstract}</h2>
      </div>
    </div>
  );
}

export default Update;
