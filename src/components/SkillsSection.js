import React, { useState } from "react";

// function SkillsSection({ skill, progress, width }) {
//   return (
//     // <div className="SkillsSection">
//     //   <div className="skills-container">
//     //     <h5 className="skill-title">{skill}</h5>
//     //     <div className="skill-bar">
//     //       <p className="skill-text">{progress}</p>
//     //       <div className="skill-progress">
//     //         <div className="progress">
//     //           <div className="inner-pregress" style={{ width: width }}></div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//   );
// }

// export default SkillsSection;
import "../style/SkillsSection.css";
const SkillsSection = ({ done, lang }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 2000);

  return (
    <div className="skillsSectionContainer">
      <h3>{lang}</h3>
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    </div>
  );
};
export default SkillsSection;
