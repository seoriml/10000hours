import React from "react";

function Quote() {
  return (
    <div className="quote-container">
      <h2 className="quote">“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</h2>
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
  );
}

export default Quote;
