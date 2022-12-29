import React, { useState, useEffect, useRef } from "react";

import "./App.css" ;

let AppCallCount = 0;
let SubCallCount = 0;

function Sub() {
  SubCallCount++;
  console.log(`Sub가 ${SubCallCount}번 실행됨!`)

  const [no, setNo] = useState(0);

  return (
    <>
      <div style={{border: '10px solid blue', padding: 10}}>
        <button onClick={() => setNo(no + 1)}>버튼 : {no}</button>
      </div>
    </>
  )
}

function App() {
  AppCallCount++;
  console.log(`App이 ${AppCallCount}번 실행됨!`)
  const [no, setNo] = useState(0);

  return (
    <>
      <div style={{border: '10px solid red', padding: 10}}>
        <button onClick={() => setNo(no + 1)}>버튼 : {no}</button>
        <hr />
        <Sub />
      </div>
    </>
  )
}

export default App;