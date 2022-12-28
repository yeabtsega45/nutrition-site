import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";

function Footer() {
  return (
    <div className="footer">
      <h4>your email adress</h4>
      <input type="text" />
      <button>Sign up</button>
      <div className="icons">
        <a href="https://www.facebook.com/">
          <FacebookIcon className="icon" />
        </a>
        <a href="https://mail.google.com">
          <EmailIcon className="icon" />
        </a>
        <a href="https://telegram.org/">
          <TelegramIcon className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
