import React from "react";
import "./CustomNavbar.css";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <>
      <div className="custom-header">
        <div className="custom-text">
          <h2>My Dev Space</h2>

          <input className="custom-input" type="text" placeholder="Search" />
          <button className="custom-button">Post</button>
          <Link to="/custom-login">
            <button className="custom-button">Login</button>
          </Link>

          <Link to="/custom-signup">
            <button className="custom-button">Sign-Up</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CustomNavbar;
