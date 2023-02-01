import React, { useState } from "react";
import { Button } from "@mui/material";

function Page1() {
  return (
    <>
      <h1>페이지 1</h1>
      <ul>
        <li>페이지 1 내용 1</li>
        <li>페이지 1 내용 2</li>
      </ul>
    </>
  );
}

function Page2() {
  return (
    <>
      <h1>페이지 2</h1>
      <ul>
        <li>페이지 2 내용 1</li>
        <li>페이지 2 내용 2</li>
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
