import React from "react";
import "./Contact.css";
import img2 from "./assets/vegetables.jpg";

function Contact() {
  return (
    <div className="contact">
      <img src={img2} alt="fruit" />
      <h1>Contact Us</h1>
      <p>
        I am an experienced Registered Dietitians and nutrition experts who work
        at --------- as Nutrition Information Specialists.
      </p>
      <p>
        I am available to answer food and nutrition questions. Questions and
        comments can be provided via email and you will receive a response to
        your inquiry.
      </p>
      <p className="bold">Phone</p>
      <p>+251 9--------</p>
      <p className="bold">Address</p>
      <p>Ethiopia , Addis Ababa</p>
      <p>Yeka subcity, Kotebe</p>
    </div>
  );
}

export default Contact;
