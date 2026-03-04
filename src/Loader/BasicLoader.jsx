import React from 'react'
import '../Loader/BasicLoader.css'



function BasicLoader({ size = 50, color = "#0d47a1", text = "Loading..." }) {
  // size: spinner diameter in px
  // color: spinner stroke color
  // text: optional loading text below spinner

  const spinnerStyle = {
    width: size,
    height: size,
    border: `${size / 10}px solid #ccc`,
    borderTop: `${size / 10}px solid ${color}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "auto",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  };

  const textStyle = {
    marginTop: "0.75rem",
    fontSize: size / 5,
    color,
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle} />
      {text && <div style={textStyle}>{text}</div>}

      {/* Keyframes style tag for spin animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
}

export default BasicLoader;




