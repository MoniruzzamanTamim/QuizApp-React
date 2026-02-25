import React, { useState } from "react";
import image from "../assets/images/3.jpg";

function MiniPlayer({imageID,title}) {
  const [mini, setMini] = useState(true);

  imageID

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
          <img  src={`http://img.youtube.com/vi/${imageID}/maxresdefault.jpg`} alt={title} />
          <p>{title}</p>
        </>
      )}
    </div>
  );
}

export default MiniPlayer;
