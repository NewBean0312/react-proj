import StopWatch from "./StopWatch";
import NumberCounter from "./NumberCounter"
import Popup from "./Popup"
import ProdList from "./ProdList"
import NoRecord from "./NoRecord"


import "./App.css" ;

function App() {
  const arr = [<li>내용 1</li>, <li>내용 2</li>, <li>내용 3</li>];

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