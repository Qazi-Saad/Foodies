import React from "react";
import Logo from "../Logo/Logo";
import "./signup.css";

const Signup = () => {
  return (
    <div>
      <Logo />

      <div className="signup-form">
        <h1 id="main-heading">
          <span>S</span>ign up
        </h1>

        <p id="first-para">
          Sign up and order your favorite food from your favorite restaurants
        </p>

        <div className="input">
          <label htmlFor="email" id="email-label">
            Email
          </label>
          <input type="text" className="input-field" id="email" />
        </div>

        <div className="input">
          <label htmlFor="first-name">First Name</label>
          <input type="text" className="input-field" id="first-name" />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" className="input-field" id="last-name" />
        </div>

        <div className="input">
          <label htmlFor="passw">Password</label>
          <input type="text" className="input-field" id="passw" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
