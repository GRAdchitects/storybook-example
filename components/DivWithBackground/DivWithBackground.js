import React from "react";

const DivWithBackground = ({ backgroundColor }) => {
  return (
    <div
      style={{ background: backgroundColor, with: "100%", height: "100px" }}
    ></div>
  );
};

export default DivWithBackground;
