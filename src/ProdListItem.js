import React, {useState} from "react"

function ProdListItem({imgNo, name, price}) {
  return (
    <>
      <div>
        <img src={`https://picsum.photos/id/${imgNo}/400/400`} />
        <div> {name}</div>
        <div>{price}</div>
      </div>
    </>
  );
}

export default ProdListItem;
