/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from "react";
import OpinionsList from "./list-components/OpinionsList";
import UpdatesList from "./list-components/UpdatesList";
import { BlogPageContext } from "../BlogPageContext";
import ListToggle from "./list-components/ListToggle";

function ArticleList() {
  const blogContext = useContext(BlogPageContext);

  return (
    <aside className="blog__article-list-container">
      <ListToggle />
      {blogContext.currentPage === "opinions" ? (
        <OpinionsList />
      ) : (
        <UpdatesList />
      )}
    </aside>
  );
}

export default ArticleList;
