import ProdListItem from "./ProdListItem"

function ProdList() {
  return (
    <>
      <ul>
        <li>
          <ProdListItem imgNo={201} name='PRODUCT 1' price={'140,000'} />
        </li>
        <li>
          <ProdListItem imgNo={1} name='PRODUCT 2' price={'320,000'} />
        </li>
        <li>
          <ProdListItem imgNo={2} name='PRODUCT 3' price={'340,000'} />  
        </li>
      </ul>
    </>
  );
}

export default ProdList;
