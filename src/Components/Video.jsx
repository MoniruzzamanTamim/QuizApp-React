import React from "react";
import image from "../assets/images/3.jpg";
import { Link } from "react-router-dom";

function Video({ id, title, noq }) {
  return (
    <Link to={`/quiz/${id}`}>
      <div className="video">
        <img src={image} alt={title} />
        <p>{title}</p>

        <div className="qmeta">
          <p>Total Question: {noq}</p>
          <p>Score: {noq ? noq * 5 : 0}</p>
        </div>
      </div>
    </Link>
  );
}

export default Video;
