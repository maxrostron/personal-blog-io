/* eslint-disable */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import Footer from "./components/Footer/Footer";
import BlogPage from "./components/Blog/BlogPage";
import { useRoutes } from "hookrouter";

function App() {
  const routes = {
    "": () => <HomePage />,
    "/": () => <HomePage />,
    "/blog": () => <BlogPage />,
    "/blog/:contentType": ({ contentType }) => (
      <BlogPage contentType={contentType} />
    ),
    "/blog/:contentType/:postId": ({ contentType, postId }) => (
      <BlogPage contentType={contentType} postId={postId} />
    ),
  };

  const routeResults = useRoutes(routes);

  return (
    <div className="App">
      <Navbar />
      <section className="app__container">
        {routeResults || <h1 className="page-not-found">404 Page not found</h1>}
      </section>
      <Footer />
    </div>
  );
}

export default App;
