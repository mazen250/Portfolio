import React, { useEffect } from "react";
import "../style/Navbar.css";
import ScrollIntoView from "react-scroll-into-view";
import AOS from "aos";
import "aos/dist/aos.css";
function Navbar() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="navContainer flex">
      <div className="linksContainer" data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-anchor-easing="ease-in-out">
        <div className="navlinks">
          <ul>
            <li>home</li>
            <ScrollIntoView selector="#about">
              <li>about</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#skills">
              <li>skills</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#projects">
              <li>Projects</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#contact">
              <li>contact</li>
            </ScrollIntoView>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
