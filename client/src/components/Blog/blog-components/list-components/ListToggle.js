import React, { useContext } from "react";
import { A } from "hookrouter";
import { BlogPageContext } from "../../BlogPageContext";

function ListToggle() {
  const blogContext = useContext(BlogPageContext);
  const articleClassName =
    blogContext.currentPage === "opinions"
      ? "blog__article-list-toggle-selected"
      : "blog__article-list-toggle-notselected";
  const updatesClassName =
    blogContext.currentPage === "updates"
      ? "blog__article-list-toggle-selected"
      : "blog__article-list-toggle-notselected";

  console.log(blogContext.currentPage);
  return (
    <div className="blog__article-list-toggle">
      <A href="/blog/opinions">
        <h1 className={articleClassName}>Opinions</h1>
      </A>
      |
      <A href="/blog/updates">
        <h1 className={updatesClassName}>Updates</h1>
      </A>
    </div>
  );
}

export default ListToggle;
