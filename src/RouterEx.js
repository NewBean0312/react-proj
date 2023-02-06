import React, { useState } from "react";
import { Button } from "@mui/material";

function HomePage() {
  return (
    <>
      <h1>Home 페이지</h1>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About 페이지</h1>
    </>
  );
}

function LoginPage() {
  return (
    <>
      <h1>Login 페이지</h1>
    </>
  );
}

function useHistory() {
  const initialUrl = "home";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [url, setUrl] = useState("home");
  const [historyUrls, setHistoryUrls] = useState([initialUrl]);

  const movePage = (url) => {
    setUrl(url);
    setHistoryUrls([url, ...historyUrls]);
  };

  const movePrev = () => {
    if (currentIndex == historyUrls.length - 1) {
      return false;
    }

    const url = historyUrls[currentIndex + 1];
    setUrl(url);
    setCurrentIndex(currentIndex + 1);
  };

  const moveNext = () => {
    if (currentIndex == 0) {
      return false;
    }

    const url = historyUrls[currentIndex - 1];
    setUrl(url);
    setCurrentIndex(currentIndex - 1);
  };

  return {
    url,
    movePage,
    historyUrls,
    movePrev,
    moveNext,
  };
}

export default function RouterEx() {
  const history = useHistory();

  return (
    <>
      <div className="p-5">현재 주소 : {history.url}</div>
      <div className="p-5">
        히스토리 : {history.historyUrls.join(",")}
        <br />
        <Button variant="outlined" onClick={history.movePrev}>
          뒤로가기
        </Button>
        <Button variant="outlined" onClick={history.moveNext}>
          앞으로가기
        </Button>
      </div>
      <ul className="flex gap-3 p-5">
        <li
          onClick={() => history.movePage("home")}
          className="hover:text-red-300 cursor-pointer"
        >
          <Button variant="contained">Home</Button>
        </li>
        <li
          onClick={() => history.movePage("about")}
          className="hover:text-red-300 cursor-pointer"
        >
          <Button variant="contained">About</Button>
        </li>
        <li
          onClick={() => history.movePage("login")}
          className="hover:text-red-300 cursor-pointer"
        >
          <Button variant="contained">Login</Button>
        </li>
      </ul>
      <div className="p-5">
        {history.url == "home" && <HomePage />}
        {history.url == "about" && <AboutPage />}
        {history.url == "login" && <LoginPage />}
      </div>
    </>
  );
}
