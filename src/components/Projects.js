import React, { useState } from "react";
import "../style/Projects.css";
import Project from "./Project";
import social from "../images/social.png";
import movie from "../images/movie.png";
import weather from "../images/weather.png";
import algo from "../images/algorithm.png";

import img5 from "../images//p5.jpg";
function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [showText, setShowText] = useState("more");

  return (
    <div className="projectsContainer" id="projects">
      <h1>Projects</h1>
      <div className="projectCard">
        <Project
          img="https://firebasestorage.googleapis.com/v0/b/biscotti-88295.appspot.com/o/images%2Fsaymom-leao-UY5kkN44XQA-unsplash.jpg?alt=media&token=e05a2741-641c-4829-b397-ba9ab312567c"
          title="BISCOTTI"
          code="https://biscottii.herokuapp.com/home"
          btnTitle="View Website"
          tech="React, Node, Express, MongooseDB"
        />
        <Project
          img={social}
          title="Social Media App"
          tech="PHP, MYSQL, CSS, HTML"
          code="https://github.com/mazen250/Social-Network-App-PHP-Mysql"
          btnTitle="View Code"
        />
        <Project
          img={movie}
          title="movie app"
          code="https://movie-app-mazen.netlify.app/"
          btnTitle="View Website"
          tech="React"
        />
      </div>
      {showMore && (
        <div className="projectCard">
          <Project
            img={weather}
            title="weather app"
            tech='react, axios, css, html'
            btnTitle="View code"
            code="https://github.com/mazen250/React-Weather-App"
          />
          <Project
            img={algo}
            btnTitle="View Code"
            tech='Java Algorithms'
            title="Fuzzy Logic Java"
            code="https://github.com/mazen250/Fuzzy-Logic-JAVA"
          />
        </div>
      )}
      <button
        className="moreProjectBtn"
        onClick={() => {
          setShowMore(!showMore);
          if (showText === "more") {
            setShowText("less");
          }
          if (showText === "less") {
            setShowText("more");
          }
        }}
      >
        show {showText} projects
      </button>
    </div>
  );
}

export default Projects;
