import React, { useEffect, useState } from "react";
import "../style/Projects.css";
import Project from "./Project";
import social from "../images/social.jpg";
import movie from "../images/movie.png";
import weather from "../images/weather.png";
import algo from "../images/algorithm.png";
import cookies from "../images/cookies.jpg";
import machine from "../images/machine.png";
import img5 from "../images//p5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [showText, setShowText] = useState("more");
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="projectsContainer" id="projects">
      <h1>Projects</h1>
      <div className="projectCard" >
        <Project
          img={cookies}
          title="Cookies E-commerce website"
          code="https://biscottii.herokuapp.com/home"
          btnTitle="View Website"
          tech="an e-commerce website build with react for the front end and express and mongodb for backend ,with a dashboard to control the product and do any crud operation and add coupons and offers"
         
        />
        <Project
          img={machine}
          title="Graduation Project"
          tech="recruitment website using machine learning models like text analysis and recommendation model build with tensorflow and flask for api , react for front end ,express for backend and mongodb for database,graded with A+"
          code="https://github.com/mazen250/grad"
          btnTitle="View Code"
        />
        <Project
          img={social}
          title="Social Media App"
          code="https://movie-app-mazen.netlify.app/"
          btnTitle="View Code"
          tech="social media app with all facebook functionality like register and login add post , like , comment and start a chat with other user in a splitted page or at home page with a pop up modal, so maybe better than facebook 😒"
        />
      </div>
      {/* {showMore && (
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
      </button> */}
      <h3 className="check">
        Check{" "}
        <a
          href="https://github.com/mazen250"
          target="blank"
          style={{
            color: "white",
            textDecoration: "none",
            borderBottom: "2px solid white",
            fontWeight: "bolder",
          }}
        >
          github
        </a>{" "}
        account for more projects , new project coming soon!
      </h3>
    </div>
  );
}

export default Projects;
