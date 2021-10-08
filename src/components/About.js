import React from "react";
import "../style/About.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
function About() {
  // const saveFile = () => {
  //   saveAs(
  //     "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "example.pdf"
  //   );
  // };

  return (
    <div className="aboutContainer" id="about">
      {/* <div className="profile"></div> */}
      <Tilt>
        <div className="profile"></div>
      </Tilt>
      <div className="aboutText">
        <h1>about me</h1>
        <p style={{ lineHeight: "23px" }}>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non ex
          maxime neque cum voluptatibus illum corporis error molestias
          perferendis, qui porro, doloribus dolorem. Tempora vero in ea
          voluptatem quia recusandae voluptas ducimus nemo molestias,
          repellendus, non asperiores sed nostrum totam adipisci aliquid ipsa
          aliquam at fugiat odio excepturi! Optio. */}
          <div style={{ margin: "10px" }}>
            <h1 style={{ fontSize: "1.2rem" }}>MY Education</h1>
            <hr
              style={{
                marginTop: "1px",
                width: "50%",
                margin: "auto",
                marginBottom: "10px",
              }}
            />
            studying at cairo university - software engineering department
            (graduating in 2022)
            <br /> graduated from futuresTech language school at 2017 grade:89%
          </div>
          <div style={{ margin: "10px" }}>
            <h1 style={{ fontSize: "1.2rem" }}> Student Activities</h1>
            <hr
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                width: "50%",
                margin: "auto",
              }}
            />
            member at techsolve committee 2019
            <br />
          </div>
          <div style={{ margin: "10px" }}>
            <h1 style={{ fontSize: "1.2rem" }}>additional skills</h1>
            <hr
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                width: "50%",
                margin: "auto",
              }}
            />
            communication skills - teamwork - languages [english (fluent) -
            arabic(mother language)]
          </div>
        </p>

        {/* <button className="cvButt" onClick={saveFile  }>
          download cv
        </button> */}
      </div>
    </div>
  );
}

export default About;
