/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import Opinion from "./content-components/Opinion";
import { BlogPageContext } from "../BlogPageContext";
import Update from "./content-components/Update";
import CommentSection from "./comment-components/CommentSection";
import ContentHeader from "./content-components/common-content-components/ContentHeader";
import CommentToggle from "./content-components/common-content-components/CommentToggle";

function Content() {
  const blogContext = useContext(BlogPageContext);
  const article =
    blogContext.currentPage === "opinions" ? <Opinion /> : <Update />;
  return (
    <section className="blog__content-container">
      <ContentHeader />
      <CommentToggle />
      <> {blogContext.showComments ? <CommentSection /> : article}</>
    </section>
  );
}

export default Content;
