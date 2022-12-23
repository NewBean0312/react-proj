import React, { useState } from "react";

function RefModifyEx() {
  const index = 0;
  const newValue = 500;
  const arr = [10, 20, 30];
  const newArr = arr.map((el, _index) => _index == index ? newValue : el);

  return <>{newArr.join(',')}</>
}

export default RefModifyEx;