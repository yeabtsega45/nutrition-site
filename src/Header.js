import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import logo from "./assets/logo2.png";

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <img src={logo} alt="logo" />
        <h2>Yishak Nutrition site</h2>
      </div>
      <div className="header__top">
        <input type="text" />
        <SearchIcon className="Icon" />
      </div>

      <div className="header__bottom">
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/topics">TOPICS</Link>
          <Link to="/recipes">RECIPES</Link>
          <Link to="/questions">QUESTIONS & ANSWERS</Link>
          <Link to="/contact">CONTACT US</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
