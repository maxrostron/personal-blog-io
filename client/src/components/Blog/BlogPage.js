/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from "react";
import Content from "./Content";
import ArticleList from "./ArticleList";
import "./BlogPage.css";
import "react-quill/dist/quill.snow.css";
import BlogPageContextProvider, { BlogPageContext } from "./BlogPageContext";

function BlogPage({ route, request }) {
  console.log(route);
  return (
    <div>
      <BlogPageContextProvider>
        <BlogPageContainer route={route} request={request} />
      </BlogPageContextProvider>
    </div>
  );
}

function BlogPageContainer({ route, request }) {
  const [header, setHeader] = useState("");
  const [article, setArticle] = useState(`${route}/${request}`);
  const [showList, setShowList] = useState(false);

  const blogContext = useContext(BlogPageContext);
  blogContext.setCurrentRoute(route);
  blogContext.setCurrentRequest(request);

  useEffect(() => {
    switch (route) {
      case "updates":
        setHeader("Personal Updates");
        setShowList(true);
        break;
      case "essays":
        setHeader("Living Essays");
        setShowList(true);
        break;
      default:
        setHeader("Blog");
        setShowList(false);
        break;
    }
  });

  return (
    <div className="blog__container">
      <header>
        <h1>{header}</h1>
      </header>

      <section>
        {showList ? (
          <ArticleList route={route} setArticle={setArticle} />
        ) : null}
        <Content request={request} article={article} />
      </section>
    </div>
  );
}

export default BlogPage;

// // TODO //

// -> Just merge blog into one long list?
// -> Still have two formats for 'live blogs' vs 'regular/ personal blogs'

// -> Maybe add loading wheel? SetTimeout as blog contents loads faster due to being a local mdx file, whereas the metadata is coming from the server..

// -> Need to add a like button

// -> Need to make vanishing side bar?

// -> Need to make re-useable components for the two types of blogs (i.e. import the 'LiveEsdays' component, then do something liek

// <LiveEssay>{children} <live essay> -> don't know how this works alt
// let test = "text contents"
// <liveessay text={text}/> time={currenttime})

// -> establish templates for the live blogs vs regular feature
// -> component for subscribe?

// -> decide whether to host comments or not.. maybe not to make maintenance easier
