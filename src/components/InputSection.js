import React from "react";

function InputSection({
  jobValue,
  timeValue,
  onJobChange,
  onTimeChange,
  onCalculate,
}) {
  return (
    <div className="input-container">
      <div className="job">
        <p>나는</p>
        <input
          id="job_value"
          type="text"
          placeholder="예) 프로그래밍"
          value={jobValue}
          onChange={onJobChange}
        />
        <p>전문가가 될 것이다.</p>
      </div>
      <div className="time">
        <p>그래서 앞으로 매일 하루에</p>
        <div>
          <input
            id="time_value"
            type="number"
            placeholder="예) 5"
            value={timeValue}
            onChange={onTimeChange}
          />
          <p>시간씩 훈련할 것이다.</p>
        </div>
      </div>
      <div className="calculate">
        <button onClick={onCalculate}>
          나는 며칠 동안 훈련을 해야
          <br className="mobile-block" />
          1만 시간이 될까?
        </button>
        <img src="./img/click.png" alt="클릭" />
      </div>
    </div>
  );
}

export default InputSection;
