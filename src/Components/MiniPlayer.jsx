import React, { useState } from "react";
import image from "../assets/images/3.jpg";

function MiniPlayer() {
  const [mini, setMini] = useState(false);

  return (
    <div className={`miniPlayer ${mini ? "floatingBtn" : ""}`}>
      
      {/* Open Button */}
      {mini && (
        <span
          className="material-icons-outlined open"
          onClick={() => setMini(false)}
        >
          play_circle_filled
        </span>
      )}

      {/* Close Button */}
      {!mini && (
        <span
          className="material-icons-outlined close"
          onClick={() => setMini(true)}
        >
          close
        </span>
      )}

      {/* Content Only Show When Full */}
      {!mini && (
        <>
          <img src={image} alt="Alt Tag" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </>
      )}
    </div>
  );
}

export default MiniPlayer;
