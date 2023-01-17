import React, { useState, useMemo, useCallback } from "react";

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

const MemoizedOrderMainFood = React.memo(OrderMainFood);

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
      <label style={{ padding: 30, userselect: "none" }}>
        <input
          type="checkbox"
          checked={btnAllChecked}
          onChange={toggleAllChecked}
        />
        전체선택
      </label>
      <ul>
        {options.map((option, index) => (
          <li style={{ userSelect: "none", cursor: "pointer" }} key={option}>
            <label>
              <input
                type="checkbox"
                checked={optionsCheckeds[index]}
                onChange={() => toggleOptionCheck(index)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

const MemoizedOrderOptions = React.memo(OrderOptions);

function OrderDelivery({ deliveryType, setDeliveryType }) {
  console.log("OrderDelivery 실행됨");

  return (
    <>
      <h2>배달옵션</h2>
      <label>
        <input
          type="radio"
          name="delivery-type"
          checked={deliveryType == "직접수령"}
          onChange={() => setDeliveryType("직접수령")}
        />
        직접수령
      </label>

      <label>
        <input
          type="radio"
          name="delivery-type"
          checked={deliveryType == "배달"}
          onChange={() => setDeliveryType("배달")}
        />
        배달
      </label>
    </>
  );
}

const MemoizedOrderDelivery = React.memo(OrderDelivery);

function Order() {
  const [mainFoodCount, setMainFoodCount] = useState(1);

  const options = useMemo(
    () => [
      "콜라 1.5",
      "머스타드 소스",
      "홀스래디쉬 소스",
      "스윗어니언 소스",
      "마라 소스",
      "칠리 소스",
    ],
    []
  );

  const [optionsCheckeds, setoptionsCheckeds] = useState(
    new Array(options.length).fill(false)
  );

  const toggleOptionCheck = useCallback(
    (index) => {
      const newOptionCheckeds = optionsCheckeds.map((el, _index) =>
        _index === index ? !el : el
      );
      setoptionsCheckeds(newOptionCheckeds);
    },
    [optionsCheckeds]
  );

  const btnAllChecked = useMemo(
    () => optionsCheckeds.every((el) => el),
    [optionsCheckeds]
  );
  const selectedCount = useMemo(
    () => optionsCheckeds.filter((el) => el).length,
    [optionsCheckeds]
  );

  const toggleAllChecked = useCallback(() => {
    if (btnAllChecked) {
      // 전부 체크해제
      const newOptionCheckeds = optionsCheckeds.map((el) => false);
      setoptionsCheckeds(newOptionCheckeds);
    } else {
      // 전부 체크
      const newOptionCheckeds = optionsCheckeds.map((el) => true);
      setoptionsCheckeds(newOptionCheckeds);
    }
  }, [optionsCheckeds]);

  const [deliveryType, setDeliveryType] = useState("직접수령");

  return (
    <>
      <h1>음식주문</h1>

      <MemoizedOrderMainFood
        setMainFoodCount={setMainFoodCount}
        mainFoodCount={mainFoodCount}
      />
      <MemoizedOrderOptions
        selectedCount={selectedCount}
        options={options}
        toggleAllChecked={toggleAllChecked}
        btnAllChecked={btnAllChecked}
        optionsCheckeds={optionsCheckeds}
        toggleOptionCheck={toggleOptionCheck}
      />
      <MemoizedOrderOptions
        selectedCount={selectedCount}
        options={options}
        toggleAllChecked={toggleAllChecked}
        btnAllChecked={btnAllChecked}
        optionsCheckeds={optionsCheckeds}
        toggleOptionCheck={toggleOptionCheck}
      />

      <MemoizedOrderDelivery
        deliveryType={deliveryType}
        setDeliveryType={setDeliveryType}
      />
    </>
  );
}

function App() {
  return (
    <>
      <Order />
    </>
  );
}

export default App;
