import React, { useState, useMemo } from "react";

import "./App.css";

function isPrimeNumber(no) {
  for ( let i = 2; i < no; i++ ) {
    if ( i * i > no ) {
      break;
    }
    
    if ( no % i == 0 ) {
      return false;
    }
  }
  
  return true;
}

function getPrimeNumbers(max) {
  const primeNumbers = [];
  
  for ( let i = 2; i <= max; i++ ){
    if ( isPrimeNumber(i) ) {
      primeNumbers.push(i);
    }
  }
  
  return primeNumbers;
}

function getPrimeNumbersCount(max) {
  return getPrimeNumbers(max).length;
}

function PrimeNosCount({max}) {

  const count = useMemo(() => getPrimeNumbersCount(max), [max]);

  return (
    <div style={{border:'10px solid black', padding:100}}>
      1부터 {max}사이에 존재하는 소수의 개수 : {count}
    </div>
  )
}

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] = useState(0);

  return (
    <>
      <PrimeNosCount max={100}/>
      <hr />
      <PrimeNosCount max={200}/>
      <hr />
      <PrimeNosCount max={300}/>
      <hr />
      <PrimeNosCount max={1000000}/>
      <hr />
      <button onClick={() => setNo(no + 1)}> 버튼 : {no}</button>
    </>
  );
}

export default App;