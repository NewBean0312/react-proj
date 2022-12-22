import React, { useState, useRef } from "react";

function RefEx() {
  const index = 3;
  const arr = [10, 20, 30, 40, 50];
  const newArr = arr.filter((el, _index) => _index != index);

  return <>{newArr.join(',')}</>;
}

export default RefEx;