import React from "react";
import "./About.css";
import img2 from "./assets/vegetables.jpg";

function About() {
  return (
    <div className="about">
      <img src={img2} alt="fruit" />
      <h1>About Us</h1>
      <div className="about__text">
        <p>
          Yishak nutrition site is a website that offers credible information to
          help you make healthful eating choices. It serves as a gateway to
          reliable information on nutrition, healthy eating, physical activity,
          and food safety for consumers.
        </p>
        <p>
          The materials found on this website are intended to be used for the
          diagnosis or treatment of a health problem. Thank you for visiting
          Yishak nutrition site!
        </p>
        <p className="bold">Website Review</p>
        <p className="bold">• Content</p>
        <p>
          1. Scope: The subject matter of the site focus on food, nutrition,
          physical activity, or food safety.
        </p>
        <p>2. Author: Yishak</p>
        <p>
          3. Timeliness: The website present current information. Current
          information includes resources that have been published within the
          past five years.
        </p>
        <p>
          4. Uniqueness: The content bring new or different perspectives, tools,
          or resources.
        </p>
        <p className="bold">• The Goals of Yishak nutrition site.</p>
        <p>
          The goal of this site is to connect consumers with credible nutrition
          information that is consistent with current science and the most
          recent edition of the Dietary Guidelines for Ethiopians. Education is
          the primary intent. The content provides an aspect of nutrition that
          is accurate, substantive, unique, credible and objective.
        </p>
      </div>
    </div>
  );
}

export default About;
