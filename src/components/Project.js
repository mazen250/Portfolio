import React from "react";
import "../style/Project.css";
function Project({ img, title, code }) {
  return (
    <div className="project">
      <img src={img} alt={title} className="projImg" />

      <h1 style={{ marginTop: "20px" }}>{title}</h1>
      <a href={code} style={{ width: "90%" }} target="_blank" rel="noreferrer">
        <button className="codeBtn">Source Code</button>
      </a>
    </div>
  );
}

export default Project;
