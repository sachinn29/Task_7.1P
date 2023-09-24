import React from "react";
import "./CustomNavbar.css";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <>
      <div className="custom-header">
        <div className="custom-text">
          <input className="custom-input" type="text" placeholder="Search" />
          <button className="custom-button">Create Post</button>
          <Link to="/login">
            <button className="custom-button">Login</button>
          </Link>

          <Link to="/signup">
            <button className="custom-button">Sign-Up</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CustomNavbar;
