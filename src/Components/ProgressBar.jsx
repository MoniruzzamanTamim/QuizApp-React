import React, { useRef, useState } from "react";
import Button from "../Components/Button";

function ProgressBar({ next, prev, submit, progress }) {

   const [tooltip,setTooltip]=useState(false)
   const tooltipref =useRef()
  function toogletooltip(){
    if(tooltip){
      setTooltip(false);
      tooltipref.current.style.display = "none";
    }else{
      console.log("mouse Over");
      
      setTooltip(true);
       tooltipref.current.style.left = `calc(${progress}% - 65px)`;
       tooltipref.current.style.opacity = "1";
       tooltipref.current.style.display = "block";
    }
  }


  return (

    <div className="progressBar">
      
      {/* Back Button */}
      <div className="backButton" onClick={prev}>
        <span className="material-icons-outlined">arrow_back</span>
      </div>

      {/* Progress */}
      <div className="rangeArea">
        <div className="tooltip" ref={tooltipref} >{progress}% Complete!</div>
        <div className="rangeBody"  >
          <div className="progress" style={{ width: `${progress}%` }} onMouseOver={toogletooltip} onMouseOut={toogletooltip}></div>
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
