import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  atomFamily
} from "recoil";

const pageNoAtomFamily = atomFamily({
  key: "RecoilEx/pageNoAtomFamily",
  default: (no) => 0,
});

function Page1() {
  const [no, setNo] = useRecoilState(pageNoAtomFamily(1));

  return (
    <>
      <h1>페이지 1</h1>
      <ul>
        <li>페이지 1의 숫자 : {no}</li>
        <li>
          <Button onClick={() => setNo(no + 10)} variant="outlined">
            페이지 1의 10 증가
          </Button>
        </li>
      </ul>
    </>
  );
}

function Page2() {
  const [no, setNo] = useRecoilState(pageNoAtomFamily(2));

  return (
    <>
      <h1>페이지 2</h1>
      <ul>
        <li>페이지 2의 숫자 : {no}</li>
        <li>
          <Button onClick={() => setNo(no + 10)} variant="outlined">
            페이지 2의 10 증가
          </Button>
        </li>
      </ul>
    </>
  );
}

function Page3() {
  const [no, setNo] = useRecoilState(pageNoAtomFamily(3));

  return (
    <>
      <h1>페이지 3</h1>
      <ul>
        <li>페이지 3의 숫자 : {no}</li>
        <li>
          <Button onClick={() => setNo(no + 10)} variant="outlined">
            페이지 3의 10 증가
          </Button>
        </li>
      </ul>
    </>
  );
}

function Page4() {
  const [no, setNo] = useRecoilState(pageNoAtomFamily(4));

  return (
    <>
      <h1>페이지 4</h1>
      <ul>
        <li>페이지 4의 숫자 : {no}</li>
        <li>
          <Button onClick={() => setNo(no + 10)} variant="outlined">
            페이지 4의 10 증가
          </Button>
        </li>
      </ul>
    </>
  );
}

export default function RecoilEx() {
  const [pageNo, setPageNo] = useState(1);
  const switchPage = () => setPageNo(pageNo + 1 <= 4 ? pageNo + 1 : 1);

  const pageName = "page" + pageNo;

  return (
    <>
      <Button onClick={switchPage} variant="outlined">
        스위치
      </Button>
      {pageName == "page1" && <Page1 />}
      {pageName == "page2" && <Page2 />}
      {pageName == "page3" && <Page3 />}
      {pageName == "page4" && <Page4 />}
    </>
  );
}
