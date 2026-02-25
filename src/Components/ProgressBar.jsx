import React from "react";
import Button from "../Components/Button";

function ProgressBar({ next, prev, submit, progress }) {
  return (
    <div className="progressBar">
      
      {/* Back Button */}
      <div className="backButton" onClick={prev}>
        <span className="material-icons-outlined">arrow_back</span>
      </div>

      {/* Progress */}
      <div className="rangeArea">
        <div className="tooltip">{Math.round(progress)}% Complete!</div>
        <div className="rangeBody">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Next / Submit Button */}
      <Button className="next" onClick={progress === 100 ? submit : next}>
        <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
        <span className="material-icons-outlined">arrow_forward</span>
      </Button>

    </div>
  );
}

export default ProgressBar;
