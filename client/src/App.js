import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="app__container">
        <HomePage />
      </section>
      <Footer />
    </div>
  );
}

export default App;
