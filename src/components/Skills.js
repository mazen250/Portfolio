import React from "react";
import "../style/Skills.css";
import SkillsSection from "./SkillsSection.js";

function Skills() {
  // const skills = [
  //   {
  //     type: "Java",
  //     level: 85,
  //     colors: {
  //       bar: "red",
  //       title: {
  //         text: "#abc123",
  //         background: "#fff",
  //       },
  //     },
  //   },
  //   { type: "Javascript", level: 75 },
  // ];

  return (
    <div className="skillsContainer" id="skills">
      <h1>Skills</h1>
      <div className="skillsContainer2">
        <SkillsSection done={80} lang="javaScript" />
        <SkillsSection done={90} lang="React" />
        <SkillsSection done={85} lang="ExpressJs" />
        <SkillsSection done={80} lang="MongoDB" />
        <SkillsSection done={65} lang="java" />
        <SkillsSection done={65} lang="C++" />
      </div>
    </div>
  );
}

export default Skills;
