import React, { useState } from "react";

function Order() {
  const options = [
    "콜라 1.5",
    "머스타드 소스",
    "홀스래디쉬 소스",
    "스윗어니언 소스",
    "마라 소스"
  ];

  const [optionsCheckeds, setoptionsCheckeds] = useState([
    false,
    false,
    true,
    true,
    true
  ]);

  return (
    <>
      <h1>음식주문</h1>
      <ul>
        {options.map((option, index) => (
          <li key={option}>
            {optionsCheckeds[index] ? "[v]" : "[ ]"}
            {option}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Order;