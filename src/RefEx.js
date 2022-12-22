import React, { useState, useRef } from "react";

let RefCallCount = 0;

function RefEx() {
  RefCallCount++;
  console.log(`RefEx가 ${RefCallCount}번 실행됨!`);

  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);
  const no3Ref = useRef(0);


  return (
    <>
      <button onClick={() => setNo1(no1 +1)}>숫자 1 증가 : {no1}</button>
      <br />
      <button onClick={() => setNo2(no2 +2)}>숫자 2 증가 : {no2}</button>
      <br />
      <button onClick={() => no3Ref.current++}>
        숫자 3 증가 : {no3Ref.current}
      </button>
    </>
  );
}

export default RefEx;