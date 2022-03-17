import React from "react";
import "../style/Project.css";
function Project({ img, title, code,btnTitle ,tech}) {
  return (
    <div className="project">
      <img src={img} alt={title} className="projImg" />

      <h1 style={{ marginTop: "20px" }}>{title}</h1>
      <h5>{tech}</h5>
      <a href={code} style={{ width: "90%" }} target="_blank" rel="noreferrer">
        <button className="codeBtn">{btnTitle}</button>
      </a>
    </div>
  );
}

export default Project;
