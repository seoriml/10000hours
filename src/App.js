import React, { useState } from "react";
import "./css/reset.css";
import "./css/10000hours.css";

function App() {
  const [jobValue, setJobValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [resultVisible, setResultVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const handleJobChange = (e) => setJobValue(e.target.value);
  const handleTimeChange = (e) => setTimeValue(e.target.value);

  const calculateDays = () => {
    setResultVisible(true);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {/* 1만시간의 법칙 타이틀 */}
      <header className="title-container">
        <img className="clock-img" src="./img/clock.png" alt="" />
        <img
          className="title-img"
          src="./img/title.png"
          alt="1만 시간의 법칙"
        />
      </header>

      {/* 메인 컨텐츠 */}
      <main>
        {/* 인용구 영역 */}
        <div className="quote-container">
          <h2 className="quote">
            “연습은 어제의 당신보다 당신을 더 낫게 만든다.”
          </h2>
          <div className="meaning">
            <img src="./img/quotes.png" alt="" />
            <p>
              <b>1만 시간의 법칙</b>은<br />
              어떤 분야의 전문가가 되기 위해서는
              <br />
              최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </p>
          </div>
        </div>

        {/* 입력창 영역 */}
        <div className="input-container">
          <div className="job">
            <p>나는</p>
            <input
              id="job_value"
              type="text"
              placeholder="예) 프로그래밍"
              value={jobValue}
              onChange={handleJobChange}
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
                onChange={handleTimeChange}
              />
              <p>시간씩 훈련할 것이다.</p>
            </div>
          </div>
        </div>

        {/* 계산버튼 영역 */}
        <div className="calculate">
          <button onClick={calculateDays}>
            나는 며칠 동안 훈련을 해야
            <br className="mobile-block" />
            1만 시간이 될까?
          </button>
          <img src="./img/click.png" alt="클릭" />
        </div>

        {/* 결과 영역 */}
        {resultVisible && (
          <div className="result-container">
            <div className="result">
              당신은 <span className="value">{jobValue || "프로그래밍"}</span>{" "}
              전문가가 되기 위해서
            </div>
            <div className="result">
              대략 <span className="value">{Math.ceil(10000 / timeValue)}</span>{" "}
              일 이상 훈련하셔야 합니다! :)
            </div>

            <div className="button-wrapper">
              <div className="go">
                <button id="open_modal" onClick={openModal}>
                  훈련하러 가기 GO!GO!
                </button>
              </div>
              <div className="share">
                <button>공유하기</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 저작권 */}
      <footer>
        <img src="./img/logo.png" alt="weniv" />
        <p>
          ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
          <br />
          수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
        </p>
      </footer>

      {/* 모달 */}
      {modalVisible && (
        <div id="modal">
          <div className="modal-wrapper">
            <div className="modal-title">
              <h2>
                화이팅!!<span>♥♥♥</span>
              </h2>
              <p>당신의 꿈을 응원합니다!</p>
            </div>
            <img src="./img/licat.png" alt="라이캣 이미지" />
            <button id="close_modal" onClick={closeModal}>
              종료하고 진짜
              <br className="mobile-block" />
              훈련하러 가기 GO!GO!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
