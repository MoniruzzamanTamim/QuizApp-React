import React, { useState } from "react";
import image from "../assets/images/3.jpg";

import ReactPlayer from 'react-player'

function MiniPlayer({videoID,title}) {
  const [mini, setMini] = useState(true);


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
        <ReactPlayer src={`https://www.youtube.com/watch?v=${videoID}` } controls playing/>
          {/* <img  src={`http://img.youtube.com/vi/${videoID}/maxresdefault.jpg`} alt={title} /> */}
          <p>{title}</p>
        </>
      )}
    </div>
  );
}

export default MiniPlayer;
