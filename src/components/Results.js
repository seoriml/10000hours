import React from "react";

function Results({ jobValue, timeValue, onOpenModal }) {
  const days = Math.ceil(10000 / timeValue);

  return (
    <div className="result-container">
      <div className="result">
        당신은 <span className="value">{jobValue || "프로그래밍"}</span>{" "}
        전문가가 되기 위해서
      </div>
      <div className="result">
        대략 <span className="value">{days}</span> 일 이상 훈련하셔야 합니다! :)
      </div>
      <div className="button-wrapper">
        <div className="go">
          <button onClick={onOpenModal}>훈련하러 가기 GO!GO!</button>
        </div>
        <div className="share">
          <button>공유하기</button>
        </div>
      </div>
    </div>
  );
}

export default Results;
