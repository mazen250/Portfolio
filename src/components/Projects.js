import React, { useState } from "react";
import "../style/Projects.css";
import Project from "./Project";
import img1 from "../images//p1.jpg";
import img2 from "../images//p2.jpg";
import img3 from "../images//p3.jpg";
import img4 from "../images//p4.jpg";
import img5 from "../images//p5.jpg";
function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [showText, setShowText] = useState("more");

  return (
    <div className="projectsContainer" id="projects">
      <h1>Projects</h1>
      <div className="projectCard">
        <Project
          img={img1}
          title="RAM CONSTRUCTION"
          code="https://github.com/mazen250/React-Ram"
        />
        <Project
          img={img2}
          title="Biscotti"
          code="https://github.com/mazen250/React-Ram"
        />
        <Project
          img={img3}
          title="movie app"
          code="https://github.com/mazen250/React-Ram"
        />
      </div>
      {showMore && (
        <div className="projectCard">
          <Project
            img={img4}
            title="weather app"
            code="https://github.com/mazen250/React-Ram"
          />
          <Project
            img={img5}
            title="Java NotePad"
            code="https://github.com/mazen250/React-Ram"
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
