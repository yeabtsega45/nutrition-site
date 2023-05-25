import React, { useState } from "react";
// import { useState } from "react";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import logo from "./assets/logo2.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  // const [search, setSearch] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div className="header">
      <div className="header__title">
        <img src={logo} alt="logo" />
        <h2>Yabtsega's Nutrition site</h2>
      </div>
      {/* <div className="header__top">
        <input
          placeholder="search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="search" />
      </div> */}

      <div className="header__bottom">
        <nav
          className={showNavbar ? "links" : "links__mobile"}
          onclick={() => setShowNavbar(true)}
        >
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          {/* <Link to="/topics">TOPICS</Link> */}
          {/* <Link to="/recipes">RECIPES</Link> */}
          <Link to="/questions">QUESTIONS & ANSWERS</Link>
          <Link to="/contact">CONTACT US</Link>
        </nav>
        <button
          className="menu__icon"
          onclick={() => setShowNavbar(!showNavbar)}
        >
          {showNavbar ? <MenuIcon /> : <CloseIcon />}
        </button>
      </div>
    </div>
  );
}

export default Header;
