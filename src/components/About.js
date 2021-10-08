import React from "react";
import "../style/About.css";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <div className="aboutContainer" id="about">
      {/* <div className="profile"></div> */}
      <Tilt>
        <div className="profile"></div>
      </Tilt>
      <div className="aboutText">
        <div className="aboutBox">
          <h1>Education</h1>
          <hr />
          <p>
            Studying At Cairo University - Software Engineering Department
            (Graduating In 2022)
            <br /> Graduated From FuturesTech Language School At 2017 Grade:89%
          </p>
        </div>
        <div className="aboutBox">
          <h1>Additional Skills</h1>
          <hr />
          <p>
            Language:English-Fluent
            <br />
            communication Skills
            <br />
            TeamWork
          </p>
        </div>
        <div className="aboutBox">
          <h1>Student Activities</h1>
          <hr />
          <p>Member at SCCI Student Activity 2019-2020 techsolve Committee</p>
        </div>
      </div>
    </div>
  );
}

export default About;
