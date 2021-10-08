import React, { useState } from "react";
import "../style/QuestionBar.css";
function QuestionBar() {
  const [ask, setAsk] = useState(true);

  return (
    <div>
      {ask && (
        <div className="QuestionBarContainer">
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
