import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

function ProgressBar() {
  return (
    <div className="progressBar">
      
      {/* Back Button */}
      <div className="backButton">
        <Link to='/' className="material-icons-outlined">
          arrow_back
        </Link>
      </div>

      {/* Range Area */}
      <div className="rangeArea">
        <div className="tooltip">24% Complete!</div>

        <div className="rangeBody">
          <div className="progress" style={{ width: "%" }}></div>
        </div>
      </div>

      {/* Next Button */}
      <Link to="/result" className="next">
        <Button className="next">
          <span>Next Question</span>
          <span className="material-icons-outlined">
            arrow_forward
          </span>
        </Button>
      </Link>
    </div>
  );
}

export default ProgressBar;
