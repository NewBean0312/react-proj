import React, {useState} from "react"

function NoRecord() {
  const [no, setNo] = useState(0);
  const [recordNos, setRecordNos] = useState([10, 20, 30]);
  const saveNo = () => {
    setRecordNos([...recordNos, no]);
  };

  const li = recordNos.map((el, index) => <li key={index}>- {el}</li>)

  return (
    <>
      <h1>숫자기록</h1>
      <input type="number" value={no} onChange={(e) => setNo(e.target.valueAsNumber)} className="input w-full max-w-xs" />
      <button type="button" onClick={saveNo} className="btn btn-outline">기록</button>
      <hr />
      <h1>기록된 숫자 v1 : {recordNos.join(',')}</h1>
      <hr />
      <h1>기록된 숫자 v2 : <ul>{li}</ul></h1>
      <hr />
      <h1>기록된 숫자 v2-1 </h1>
      <ul>
          {recordNos.map((el, index) => (<li key={index}>- {el}</li>))}
      </ul>
    </>
  );
}

export default NoRecord;