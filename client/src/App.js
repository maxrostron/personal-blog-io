import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="app__container">
        <HomePage />
      </section>
    </div>
  );
}

export default App;
