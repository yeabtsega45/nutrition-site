import React from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Header from "./Header";
import Questions from "./Questions";
import Recipes from "./Recipes";
import Topics from "./Topics";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
// import Login from "./Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Login /> */}
    </>
  );
}

export default App;
