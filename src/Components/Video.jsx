import React from "react";
import image from "../assets/images/3.jpg";
import { Link } from "react-router-dom";

function Video({ id, title, noq }) {
  return (
    
      <div className="video">
        <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title}
      />
        <p>{title}</p>

        <div className="qmeta">
          <p>Total Question: {noq}</p>
          <p>Score: {noq ? noq * 5 : 0}</p>
        </div>
      </div>
  );
}

export default Video;
