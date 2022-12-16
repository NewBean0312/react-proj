import StopWatch from "./StopWatch";
import NumberCounter from "./NumberCounter"
import Popup from "./Popup"
import ProductListItem from "./ProductListItem"

function App() {
  return (
    <>
      {/* <StopWatch />
      <NumberCounter />
      <Popup /> */}
      <div style={{display:'flex', gap:'10px'}}>
        <ProductListItem imgNo={201} name='MAC BOOK AIR' productPriceFormatted={'1,140,000'}/>
        <ProductListItem imgNo={1} name='MAC BOOK PRO' productPriceFormatted={'2,320,000'}/>
        <ProductListItem imgNo={2} name='MAC BOOK PRO PLUS' productPriceFormatted={'4,340,000'}/>
      </div>
    </>
  );
}

export default App;