import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  NavLink,
} from "react-router-dom";
import classNames from "classnames";

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

export default function ReouterEx() {
  const location = useLocation();

  return (
    <>
      <header>현재주소 : {location.pathname}</header>
      <hr />
      <NavLink
        to="/home/main"
        className={({ isActive }) =>
          classNames(
            "btn",
            { "btn-link": !isActive },
            { "btn-primary": isActive }
          )
        }
      >
        MAIN
      </NavLink>
      <NavLink
        to="/home/about"
        className={({ isActive }) =>
          classNames(
            "btn",
            { "btn-link": !isActive },
            { "btn-primary": isActive }
          )
        }
      >
        ABOUT
      </NavLink>
      <Routes>
        <Route path="/home/main" element={<HomeMainPage />} />
        <Route path="/home/about" element={<HomeAboutPage />} />
        <Route path="*" element={<Navigate to="/home/main" />} />
      </Routes>
    </>
  );
}
