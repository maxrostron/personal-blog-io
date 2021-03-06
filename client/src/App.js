/* eslint-disable */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import Footer from "./components/Footer/Footer";
import BlogPage from "./components/Blog/BlogPage";
import Now from "./components/More/Now/Now";
import Open from "./components/More/Open/Open";
import Subscribe from "./components/Subscribe/Subscribe";
import HandleVerification from "./components/Subscribe/HandleVerification";
import Contact from "./components/Contact/Contact";
import { useRoutes } from "hookrouter";

function App() {
  const routes = {
    "": () => <HomePage />,
    "/": () => <HomePage />,
    "/blog": () => <BlogPage />,
    "/blog/:slug": ({ slug }) => <BlogPage slug={slug} />,
    "/now": () => <Now />,
    "/open": () => <Open />,
    "/subscribe": () => <Subscribe />,
    "/subscription/:code/:email/:token": ({ code, email, token }) => (
      <HandleVerification code={code} email={email} token={token} />
    ),
    "/contact": () => <Contact />,
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
