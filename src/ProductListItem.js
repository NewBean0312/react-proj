import React, {useState} from "react"

function ProductListItem() {
  const imgNo = 1;
  const productName = 'MAC BOOK AIR';
  const productPriceFormatted = '4,340,000';

  return (
    <>
      <div
          style={{display: "inline-flex", flexDirection: "column", gap: "10px"}}>
          <img src={`https://picsum.photos/id/${imgNo}/400/400`} />
          <div style={{textAlign:'center', fontWeight: 'bold', color: '#454545'}}>{productName}</div>
          <div style={{textAlign:'center', color: '#454545'}}>{productPriceFormatted}원</div>
        </div>
    </>
  );
}

export default ProductListItem;
