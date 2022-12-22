import React from "react";
import "./Login.css";
import logo from "./assets/logo2.png";

function Login() {
  return (
    <div className="login">
      <div className="header__title">
        <img src={logo} alt="logo" />
        <h2>Yishak Nutrition site</h2>
      </div>
      <form>
        <input placeholder="full name" type="text" />
        <input placeholder="email" type="text" />
        <input placeholder="password" type="password" />
        <button>Sign In</button>
      </form>
      <p>Not a member?</p>
      <button>Register</button>
    </div>
  );
}

export default Login;
