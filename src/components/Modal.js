import React from "react";

function Modal({ onClose }) {
  return (
    <div id="modal">
      <div className="modal-wrapper">
        <div className="modal-title">
          <h2>
            화이팅!!<span>♥♥♥</span>
          </h2>
          <p>당신의 꿈을 응원합니다!</p>
        </div>
        <img src="./img/licat.png" alt="라이캣 이미지" />
        <button id="close_modal" onClick={onClose}>
          종료하고 진짜
          <br className="mobile-block" />
          훈련하러 가기 GO!GO!
        </button>
      </div>
    </div>
  );
}

export default Modal;
