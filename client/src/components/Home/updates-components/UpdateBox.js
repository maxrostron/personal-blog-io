import React, { useState, useEffect } from "react";
import Update from "./Update";

function UpdateBox() {
  const [list, setList] = useState(null);

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
          blog.meta.date = Date.parse(blog.meta.date);
          tempList.push(blog.meta);
        });
        setList(tempList);

        return tempList;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="home__update-container">
      <h1>Recent Updates:</h1>
      {list &&
        list
          .sort((a, b) => b.date - a.date)
          .map((article, index) => {
            return <Update article={article} key={index} />;
          })}
    </div>
  );
}

export default UpdateBox;
