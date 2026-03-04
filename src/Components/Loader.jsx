import React from "react";

function Loader({ size = 52, bg = "transparent", text = "Loading..." }) {
  const spinnerBorder = Math.max(4, Math.round(size / 10));

  const wrapperStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    padding: "1rem",
    background: bg,
  };

  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    border: `${spinnerBorder}px solid #d1d5db`,
    borderTopColor: "#00ff84",
    borderRadius: "50%",
    animation: "loader-spin 0.9s linear infinite",
  };

  const textStyle = {
    fontSize: `${Math.max(13, Math.round(size / 4))}px`,
    fontWeight: 600,
    color: "#002333",
  };

  return (
    <div style={wrapperStyle} role="status" aria-live="polite">
      <span style={spinnerStyle} />
      {text ? <p style={textStyle}>{text}</p> : null}
    </div>
  );
}

export default Loader;
