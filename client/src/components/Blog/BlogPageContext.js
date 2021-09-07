/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const BlogPageContext = createContext();

const BlogPageContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("opinions");
  const [showComments, setShowComments] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  return (
    <BlogPageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        showComments,
        setShowComments,
        currentPost,
        setCurrentPost,
      }}
    >
      {children}
    </BlogPageContext.Provider>
  );
};

export default BlogPageContextProvider;
