import React, { useState } from "react";
import "./Question.css";

function Question(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      {props.datas.map((data) => {
        return (
          <div className="question">
            <h4>{data.title}</h4>
            {data.questions.map((qns) => {
              return (
                <div className="wrapper">
                  <div onClick={() => setShow(!show)} className="item">
                    <p className="plus">+</p>
                    <h3 className="button">{qns}</h3>
                  </div>
                  {show ? (
                    <div className="answers">{data.answers}</div>
                  ) : (
                    <div></div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Question;
