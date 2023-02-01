import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const page1NoAtom = atom({
  key: "app/page1NoAtom",
  default: 0,
});

const page2NoAtom = atom({
  key: "app/page2NoAtom",
  default: 0,
});

const page3NoAtom = atom({
  key: "app/page3NoAtom",
  default: 0,
});

const page4NoAtom = atom({
  key: "app/page4NoAtom",
  default: 0,
});

function Page1() {
  const [no, setNo] = useRecoilState(page1NoAtom);
  const setPage2No = useSetRecoilState(page2NoAtom);
  const onClick = () => setPage2No(0);

  return (
    <>
      <h1>페이지 1</h1>
      <div>
        <Button onClick={onClick} variant="outlined">
          페이지 2의 값을 초기화
        </Button>
      </div>
      <ul>
        <li>페이지 1의 숫자 : {no}</li>
        <li>
          <Button onClick={() => setNo(no + 10)} variant="outlined">
            페이지 1의 10 증가
          </Button>
        </li>
        <li>
          <Button onClick={() => setNo(no - 10)} variant="outlined">
            페이지 1의 10 감소
          </Button>
        </li>
      </ul>
    </>
  );
}

function Page2() {
  const [no, setNo] = useRecoilState(page2NoAtom);
  const page1No = useRecoilValue(page1NoAtom);

  return (
    <>
      <h1>페이지 2</h1>
      <div>페이지 1의 숫자 : {page1No}</div>
      <ul>
        <li>페이지 2의 숫자 : {no}</li>
        <li>
          <Button onClick={() => setNo(no + 10)} variant="outlined">
            페이지 2의 10 증가
          </Button>
        </li>
        <li>
          <Button onClick={() => setNo(no - 10)} variant="outlined">
            페이지 2의 10 감소
          </Button>
        </li>
      </ul>
    </>
  );
}

function Page3() {
  const [no, setNo] = useRecoilState(page3NoAtom);

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
  const [no, setNo] = useRecoilState(page4NoAtom);

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
