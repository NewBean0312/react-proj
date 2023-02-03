import React, { useState } from "react";

function HomePage() {
  return (
    <>
      <h1>홈 페이지</h1>
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

export default function RouterEx() {
  const [url, setUrl] = useState("home");

  return (
    <>
      <div>
        <span
          onClick={() => setUrl("home")}
          className="hover:text-red-300 cursor-pointer"
        >
          홈
        </span>
        <span
          onClick={() => setUrl("about")}
          className="hover:text-red-300 cursor-pointer"
        >
          About
        </span>
        <span
          onClick={() => setUrl("login")}
          className="hover:text-red-300 cursor-pointer"
        >
          로그인
        </span>
      </div>
      {url == "home" && <HomePage />}
      {url == "about" && <AboutPage />}
      {url == "login" && <LoginPage />}
    </>
  );
}
