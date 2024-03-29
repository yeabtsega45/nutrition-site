import React from "react";
import "./Questions.css";
import Question from "./Question";
import img2 from "./assets/vegetables.jpg";

const datas = [
  {
    title: "diet & health condition",
    questions: [
      "Q: What foods can I eat to manage my diabetes or pre-diabetes?",
    ],
    answers:
      "Living with Diabetes: Eat Well (Centers for Disease Control and Prevention)",
  },
  {
    title: "diet & health condition",
    questions: ["what"],
    answers:
      "Living with Diabetes: Eat Well (Centers for Disease Control and Prevention)",
  },
  {
    title: "diet & health condition",
    questions: ["What foods can I "],
    answers:
      "Living with Diabetes: Eat Well (Centers for Disease Control and Prevention)",
  },
  {
    title: "diet & health condition",
    questions: ["What foods can I eat to manage my dia"],
    answers:
      "Living with Diabetes: Eat Well (Centers for Disease Control and Prevention)",
  },
  {
    title: "diet & health condition",
    questions: ["What foods can I eat to manage my diabetes or pre"],
    answers:
      "Living with Diabetes: Eat Well (Centers for Disease Control and Prevention)",
  },
];

function Questions() {
  return (
    <div className="questions">
      <img src={img2} alt="fruit" />
      <h1>Questions & Answers</h1>
      <div className="datas">
        <Question datas={datas} />
      </div>
    </div>
  );
}

export default Questions;
