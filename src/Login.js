import React from "react";
import "./Login.css";
import logo from "./assets/logo2.png";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="login">
      <div className="header__title">
        <img src={logo} alt="logo" />
        <h2>Yishak Nutrition site</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={(e) => console.info({ name, email, password })}
          type="submit"
        >
          Sign In
        </button>
      </form>
      <p>Not a member?</p>
      <button>Register</button>
    </div>
  );
}

export default Login;
