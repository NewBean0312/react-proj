import React, { useState, useRef } from "react";

function RefEx() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([
    5,
    10,
    15,
    20,
    5,
    25,
    5,
    30,
    5
  ]);

  const saveNo = () => {
    if (no === "") {
      alert("숫자를 입력해주세요.");
      return;
    }

    setRecordedNos([...recordedNos, no]);
    setNo("");
    noInputRef.current.focus();
  };
  
  const removeNo = (index) => {
    const newRecordedNos = recordedNos.filter((_, _index) => _index != index);
    setRecordedNos(newRecordedNos);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        <input
          type="number"
          ref={noInputRef}
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
        />
        <button type="submit">기록</button>
      </form>

      <hr />

      <h1>기록된 숫자</h1>
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>

      <hr />

      <button onClick={() => removeNo(0)}>index 0 삭제</button>
      <button onClick={() => removeNo(1)}>index 1 삭제</button>
      <button onClick={() => removeNo(2)}>index 2 삭제</button>
      <button onClick={() => removeNo(3)}>index 3 삭제</button>
    </>
  );
}

export default RefEx;
