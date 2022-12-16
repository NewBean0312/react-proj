import React, {useState} from "react"

function ProductListItem({imgNo, name: productName, productPriceFormatted}) {
  // 방법 1
  // const imgNo = props.imgNo;
  // const productName = props.name;
  // const productPriceFormatted = props.productPriceFormatted;

  // 방법 2
  // const {imgNo, name, productPriceFormatted} = props;
  // const productName = name;

  // 방법 3
  // const {imgNo, name: productName, productPriceFormatted} = props;

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
