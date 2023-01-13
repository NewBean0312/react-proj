import React, { useState } from "react";

import "./App.css";

function App() {
  const ageBands = [
    "영유아/아동",
    "10대",
    "20대",
    "30대",
    "40대",
    "50대",
    "60대",
    "그외",
  ];
  const [selectedAgeBand, setSelectedBand] = useState(ageBands[0]);

  return (
    <>
      {ageBands.map((ageBand) => (
        <label>
          <input
            name="ageBand"
            type="radio"
            onChange={() => setSelectedBand(ageBand)}
            checked={ageBand == selectedAgeBand}
          />
          {ageBand}
        </label>
      ))}
      <hr />
      <div> 현재 값 : {selectedAgeBand}</div>
    </>
  );
}

export default App;