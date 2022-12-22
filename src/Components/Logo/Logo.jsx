import image from "./logo.png";
import React from "react";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-section">
      <img src={image} alt="N/A" id="logo" />
      <span id="logo-name">FOODIES</span>
    </div>
  );
};

export default Logo;
