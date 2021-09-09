/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const BlogPageContext = createContext();

const BlogPageContextProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState("");
  const [currentRequest, setCurrentRequest] = useState("");
  const [showComments, setShowComments] = useState(false);

  return (
    <BlogPageContext.Provider
      value={{
        currentRoute,
        setCurrentRoute,
        showComments,
        setShowComments,
        currentRequest,
        setCurrentRequest,
      }}
    >
      {children}
    </BlogPageContext.Provider>
  );
};

export default BlogPageContextProvider;
