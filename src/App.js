import StopWatch from "./StopWatch";
import NumberCounter from "./NumberCounter"
import Popup from "./Popup"
import ProdList from "./ProdList"
import NoRecord from "./NoRecord"
import FormEx from "./FormEx"
import RefEx from "./RefEx"
import RefRemoveEx from "./RefRemoveEx"
import RefModifyEx from "./RefModifyEx"

import "./App.css" ;

function App() {

  return (
    <>
      {/* <StopWatch />
      <NumberCounter />
      <Popup />
      <ProdList className="container mx-auto"/>
      <NoRecord />
      <FormEx />
      <RefEx />
      <RefRemoveEx /> */}
      <RefModifyEx />
    </>
  );
}

export default App;