import React, { useEffect } from "react";
import "../style/Project.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Project({ img, title, code, btnTitle, tech }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="project" data-aos="fade-left"
    data-aos-duration="2000"
    data-aos-anchor-easing="ease-in-out">
      <img src={img} alt={title} className="projImg" />
      <div className="text">
        <h1 style={{ marginTop: "20px" }}>{title}</h1>
        <h5>{tech}</h5>
        <a href={code} target="_blank" rel="noreferrer">
          <button className="button-86">{btnTitle}</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
