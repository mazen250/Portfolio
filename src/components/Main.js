import React from "react";
import "../style/Main.css";
import Particles from "react-particles-js";
import TypeWriter from "typewriter-effect";
import ScrollIntoView from "react-scroll-into-view";
import pdf from '../files/Mazen-Fayez-cv.pdf'
function Home() {
  return (
    <div className="mainContainer">
      <div className="leftSide">
        <div className="textOne">
          <TypeWriter
            onInit={(text) => {
              text
                .typeString("HI THERE!!")
                .deleteAll()
                .typeString("This Is Mazen")
                .start();
            }}
          />
        </div>
        <h3>
          i am a <span style={{ color: "goldenrod" }}>software developer</span>
        </h3>
        {/* <ScrollIntoView selector="#contact">
          <button
            className="contact-btn"
            style={{
              fontWeight: "400",
            }}
          >
            get in touch
          </button>
        </ScrollIntoView> */}
        <a href={pdf} download='Mazen-Fayez-CV' className="mycv">DOWNLOAD CV</a>
      </div>
      <div className="rightSide">
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Home;
