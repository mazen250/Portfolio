import React, { useState } from "react";
import "../style/Navbar.css";
import ScrollIntoView from "react-scroll-into-view";
function Navbar() {
  return (
    <div className="navContainer flex">
      <div className="linksContainer">
        {/* <div className="logo">
        <img src={Logo} alt="logo" className="logoImage" />
      </div> */}
        {/* {toggle && (
        <div className="toggleLinks">
          <ul className="flex">
            <li>home</li>
            <li>about</li>
            <li>skills</li>
            <li>education</li>
            <li>contact</li>
          </ul>
        </div>
      )}
      <div className="navlinks">
        <ul className="flex">
          <li>home</li>
          <li>about</li>
          <li>skills</li>
          <li>education</li>
          <li>contact</li>
        </ul>
      </div>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          setToggle(!toggle);
        }}
        className="toggleBtn"
      >
        <MenuIcon />
      </button> */}
        <div className="navlinks">
          <ul className="flex">
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
