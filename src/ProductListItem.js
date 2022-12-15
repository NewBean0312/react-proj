import React, {useState} from "react"

function ProductListItem() {
  return (
    <>
      <div
          style={{display: "inline-flex", flexDirection: "column", gap: "10px"}}>
          <img src="https://picsum.photos/id/1/400/400" />
          <div style={{textAlign:'center', fontWeight: 'bold', color: '#454545'}}>MAC BOOK AIR</div>
          <div style={{textAlign:'center', color: '#454545'}}>4,340,000</div>
        </div>
    </>
  );
}

export default ProductListItem;
