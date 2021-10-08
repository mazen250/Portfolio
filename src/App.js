import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import About from "../src/components/About";
import QuestionBar from "./components/QuestionBar";
import Skills from "../src/components/Skills";
import Projects from "./components/Projects";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function App() {
  let width2 = window.innerWidth;
  if (width2 < 600) {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <div className="qbar">{<QuestionBar />}</div>
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
