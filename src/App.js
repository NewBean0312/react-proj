import React, { useState, useEffect, useRef } from "react";

import "./App.css" ;

let AppCallCount = 0;

function App() {
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const [no, SetNo] = useState(0);

  useEffect(() => {
    inputNameRef.current.focus();
  });

  return (
    <>
      <input ref={inputNameRef} type="text" placeholder="이름" />
      <input ref={inputAgeRef} type="number" placeholder="나이" />
      <button 
        onClick={() => {
          SetNo(no + 1);
          inputAgeRef.current.focus();
        }}
      >
        증가 : {no}
      </button>
    </>
  )
}

export default App;