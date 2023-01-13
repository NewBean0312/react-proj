import React, { useState } from "react";

import "./App.css";

function App() {
  const fruits = ["사과", "배", "바나나"];

  const [selecteds, setSelecteds] = useState(
    new Array(fruits.length).fill(true)
  );

  const toggleFruitSelected = (index) => {
    const newSelecteds = selecteds.map((el, _index) =>
      _index == index ? !el : el
    );
    setSelecteds(newSelecteds);
  };

  const selectedFruits = selecteds
    .map((el, index) => (el ? fruits[index] : el))
    .filter((el) => el);

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <label>
              <input
                checked={selecteds[index]}
                type="checkbox"
                onChange={() => toggleFruitSelected(index)}
              />
              {fruit}
            </label>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        선택상태 : {selecteds.join(", ")}
        <hr />
        선택된 과일 : {selectedFruits.join(", ")}
      </div>
    </>
  );
}

export default App;