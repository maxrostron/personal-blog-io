import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import Footer from "./components/Footer/Footer";
// import BlogPage from "./components/Blog/BlogPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="app__container">
        <HomePage />
        {/* <BlogPage /> */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
