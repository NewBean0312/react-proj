import React, { useState, useMemo } from "react";

function OrderMainFood({ setMainFoodCount, mainFoodCount }) {
  return (
    <>
      <h2>메인 (수량 : {mainFoodCount})</h2>
      <div>
        <button onClick={() => setMainFoodCount(mainFoodCount + 1)}>
          증가
        </button>
        <button
          onClick={() =>
            setMainFoodCount(mainFoodCount == 1 ? 1 : mainFoodCount - 1)
          }
        >
          감소
        </button>
      </div>
    </>
  );
}

function OrderOptions({
  selectedCount,
  options,
  toggleAllChecked,
  btnAllChecked,
  optionsCheckeds,
  toggleOptionCheck,
}) {
  return (
    <>
      <h2>
        옵션 ({selectedCount} / {options.length})
      </h2>
      <span
        onClick={toggleAllChecked}
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        {btnAllChecked ? "[v]" : "[ ]"}전체선택
      </span>
      <ul>
        {options.map((option, index) => (
          <li
            key={option}
            style={{ userSelect: "none", cursor: "pointer" }}
            onClick={() => toggleOptionCheck(index)}
          >
            {optionsCheckeds[index] ? "[v]" : "[ ]"}
            {option}
          </li>
        ))}
      </ul>
    </>
  );
}

function Order() {
  const [mainFoodCount, setMainFoodCount] = useState(1);

  const options = [
    "콜라 1.5",
    "머스타드 소스",
    "홀스래디쉬 소스",
    "스윗어니언 소스",
    "마라 소스",
    "칠리 소스",
  ];

  const [optionsCheckeds, setoptionsCheckeds] = useState(
    new Array(options.length).fill(false)
  );

  const toggleOptionCheck = (index) => {
    const newOptionCheckeds = optionsCheckeds.map((el, _index) =>
      _index === index ? !el : el
    );
    setoptionsCheckeds(newOptionCheckeds);
  };

  const btnAllChecked = useMemo(
    () => optionsCheckeds.every((el) => el),
    [optionsCheckeds]
  );
  const selectedCount = useMemo(
    () => optionsCheckeds.filter((el) => el).length,
    [optionsCheckeds]
  );

  const toggleAllChecked = () => {
    if (btnAllChecked) {
      // 전부 체크해제
      const newOptionCheckeds = optionsCheckeds.map((el) => false);
      setoptionsCheckeds(newOptionCheckeds);
    } else {
      // 전부 체크
      const newOptionCheckeds = optionsCheckeds.map((el) => true);
      setoptionsCheckeds(newOptionCheckeds);
    }
  };

  return (
    <>
      <h1>음식주문</h1>

      <OrderMainFood
        setMainFoodCount={setMainFoodCount}
        mainFoodCount={mainFoodCount}
      />
      <OrderOptions
        selectedCount={selectedCount}
        options={options}
        toggleAllChecked={toggleAllChecked}
        btnAllChecked={btnAllChecked}
        optionsCheckeds={optionsCheckeds}
        toggleOptionCheck={toggleOptionCheck}
      />
    </>
  );
}

export default Order;
