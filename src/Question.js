import React from "react";
import "./Question.css";

function Question(props) {
  console.log(Question);
  return (
    <div>
      {props.datas.map((data) => {
        return (
          <div className="question">
            <h4>{data.title}</h4>
            {data.questions.map((qns) => {
              return <button>{qns}</button>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Question;
