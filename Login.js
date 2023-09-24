import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./FireBase";
import "./Login.css";

function CustomLoginForm() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, inputEmail, inputPassword);
      console.log("Login Successful");
      return navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <div>
      <form className="custom-form" onSubmit={handleFormSubmit}>
        <label className="custom-label">Email</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <br />
        <label className="custom-label">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button type="submit" className="custom-button">
          Log in
        </button>
        {errorMessage && <p className="custom-error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default CustomLoginForm;
