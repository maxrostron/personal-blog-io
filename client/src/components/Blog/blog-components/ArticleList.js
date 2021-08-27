/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import EssaysList from "./list-components/EssaysList";
import OpinionsList from "./list-components/OpinionsList";
import UpdatesList from "./list-components/UpdatesList";
import { A } from "hookrouter";

function ArticleList({ currentPage, setCurrentPage }) {
  const [list, setList] = useState(<OpinionsList />);

  //figure out how to replace default opinions list value

  useEffect(() => {
    switch (currentPage) {
      case "opinions":
        setList(<OpinionsList />);
        break;
      case "updates":
        setList(<UpdatesList />);
        break;
      case "essays":
        setList(<EssaysList />);
        break;

      default:
        break;
    }
  }, [currentPage]);

  return (
    <aside className="blog__article-list-container">
      <div className="blog__article-list-toggle">
        <A href="/blog/opinions">
          <h1
            className={
              list.type.name === "OpinionsList"
                ? "blog__article-list-toggle-selected"
                : "blog__article-list-toggle-notselected"
            }
            onClick={() => setCurrentPage("opinions")}
          >
            Opinions
          </h1>
        </A>
        |
        <A href="/blog/updates">
          <h1
            className={
              list.type.name === "UpdatesList"
                ? "blog__article-list-toggle-selected"
                : "blog__article-list-toggle-notselected"
            }
            onClick={() => setCurrentPage("updates")}
          >
            Updates
          </h1>
        </A>
        |
        <A href="/blog/essays">
          <h1
            className={
              list.type.name === "EssaysList"
                ? "blog__article-list-toggle-selected"
                : "blog__article-list-toggle-notselected"
            }
            onClick={() => setCurrentPage("essays")}
          >
            Essays
          </h1>
        </A>
      </div>
      {list}
    </aside>
  );
}

export default ArticleList;
