import React from "react";
import "../style/Navbar.css";
import ScrollIntoView from "react-scroll-into-view";
function Navbar() {
  return (
    <div className="navContainer flex">
      <div className="linksContainer">
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
