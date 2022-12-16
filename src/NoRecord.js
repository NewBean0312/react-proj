import React, {useState} from "react"

function NoRecord() {
  const [no, setNo] = useState(0);
  const [recordNo, setRecordNo] = useState(0);
  const saveNo = () => {
    setRecordNo(no);
  };

  return (
    <>
      <h1>숫자기록</h1>
      <input type="number" value={no} onChange={(e) => setNo(e.target.valueAsNumber)} className="input w-full max-w-xs" />
      <button type="button" onClick={saveNo} className="btn btn-outline">기록</button>
      <hr />
      기록된 숫자 : {recordNo}
    </>
  );
}

export default NoRecord;