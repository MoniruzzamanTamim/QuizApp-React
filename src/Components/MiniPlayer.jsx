import React, { useState } from "react";
import image from "../assets/images/3.jpg";

import ReactPlayer from 'react-player'

function MiniPlayer({ videoID, videoTitle }) {
  const [mini, setMini] = useState(true);

  return (
    <div className={`miniPlayer ${mini ? "floatingBtn" : ""}`}>
      {mini && (
        <span
          className="material-icons-outlined open"
          onClick={() => setMini(false)}
        >
          play_circle_filled
        </span>
      )}
      {!mini && (
        <>
          <span
            className="material-icons-outlined close"
            onClick={() => setMini(true)}
          >
            close
          </span>
          <ReactPlayer src={`https://www.youtube.com/watch?v=${videoID}`} controls playing/>
          <p>{videoTitle}</p>
        </>
      )}
    </div>
  );
}

export default MiniPlayer;
