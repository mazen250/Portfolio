import React, { useEffect, useState } from "react";
import "../style/QuestionBar.css";
import AOS from "aos";
import "aos/dist/aos.css";
function QuestionBar() {
  const [ask, setAsk] = useState(true);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    
    <div>
      {ask && (
        <div className="QuestionBarContainer" data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-anchor-easing="ease-in-out">
          <h1>note:</h1>
          <h3>for better experience open website from large screen</h3>
          <button
            onClick={() => {
              setAsk(false);
            }}
          >
            got it
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionBar;
