import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function HomeMainPage() {
  return (
    <>
      <h1>HOME, MAIN</h1>
    </>
  );
}

function HomeAboutPage() {
  return (
    <>
      <h1>HOME, ABOUT</h1>
    </>
  );
}

function UserLoginPage() {
  return (
    <>
      <h1>User Login</h1>
    </>
  );
}

export default function ReouterEx() {
  return (
    <>
      <Routes>
        <Route path="/home/main" element={<HomeMainPage />} />
        <Route path="/home/about" element={<HomeAboutPage />} />
        <Route path="/user/login" element={<UserLoginPage />} />
        <Route path="*" element={<Navigate to="/user/login" />} />
      </Routes>
    </>
  );
}
