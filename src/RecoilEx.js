import React, { useState } from "react";
import { Button } from "@mui/material";
import { atom, useRecoilState } from "recoil";

const page1NoAtom = atom({
  key: "app/page1NoAtom",
  default: 0,
});

const page2NoAtom = atom({
  key: "app/page2NoAtom",
  default: 0,
});

function Page1() {
  const [no, setNo] = useRecoilState(page1NoAtom);
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
        <li>
          <Button onClick={() => setNo(no - 10)} variant="outlined">
            페이지 2의 10 감소
          </Button>
        </li>
      </ul>
    </>
  );
}

export default function RecoilEx() {
  const [pageName, setPageName] = useState("page1");
  const switchPage = () => setPageName(pageName == "page1" ? "page2" : "page1");
  return (
    <>
      <Button onClick={switchPage} variant="outlined">
        스위치
      </Button>
      {pageName == "page1" && <Page1 />}
      {pageName == "page2" && <Page2 />}
    </>
  );
}

