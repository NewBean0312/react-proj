import React, { useState } from "react";

import "./App.css";

function App() {
  const [selectedGender, setSelectedGender] = useState("W");

  return (
    <>
      <label>
        <input
          type="radio"
          name="gender"
          onChange={(e) => setSelectedGender("M")}
          checked={selectedGender == "M"}
        />{" "}
        남성
        <input
          type="radio"
          name="gender"
          onChange={(e) => setSelectedGender("W")}
          checked={selectedGender == "W"}
        />{" "}
        여성
      </label>
      <hr />
      <div> 현재 값 : {selectedGender}</div>
    </>
  );
}

export default App;