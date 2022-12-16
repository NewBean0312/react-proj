import StopWatch from "./StopWatch";
import NumberCounter from "./NumberCounter"
import Popup from "./Popup"
import ProdList from "./ProdList"
import NoRecord from "./NoRecord"


import "./App.css" ;

function App() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr = nums.map((el, index) => <li key={index}>내용 {el}</li>)
  // const arr = [<li>내용 1</li>, <li>내용 2</li>, <li>내용 3</li>];

  return (
    <>
      {/* <StopWatch />
      <NumberCounter />
      <Popup />
      <ProdList className="container mx-auto"/>
      <NoRecord /> */}
      <ul>
        {arr}
      </ul>
      <hr />
      <ul>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ul>
    </>
  );
}

export default App;