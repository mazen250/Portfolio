import React, { useEffect } from "react";
import "../style/About.css";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="aboutContainer" id="about">
      {/* <div className="profile"></div> */}
      <Tilt>
        <div className="profile" data-aos="fade-left"
    data-aos-duration="2000"
    data-aos-anchor-easing="ease-in-out"></div>
      </Tilt>
      <div className="aboutText" data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-anchor-easing="ease-in-out">
        <div className="aboutBox">
          <h1>Education</h1>
          <hr />
          <p>
            Graduated from Cairo University - Software Engineering Department
            (Graduating In 2022)
            <br /> Graduated From FuturesTech Language School At 2017 Grade:89%
          </p>
        </div>
        <div className="aboutBox">
          <h1>Additional Skills</h1>
          <hr />

          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Instructor at Beta academy
            </span>
            <br />
            <br />
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
