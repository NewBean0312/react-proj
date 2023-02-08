import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  NavLink,
  useParams,
  useNavigate,
} from "react-router-dom";

function TodoListPage() {
  return (
    <>
      <h1>할 일 리스트</h1>
    </>
  );
}

function TodoWritePage() {
  return (
    <>
      <h1>할 일 작성</h1>
    </>
  );
}

export default function ReouterEx() {
  const location = useLocation();

  return (
    <>
      <header>
        상단바
        <hr />
        주소 : {location.pathname}
      </header>
      <Routes>
        <Route path="/list" element={<TodoListPage />} />
        <Route path="/write" element={<TodoWritePage />} />
        <Route path="*" element={<Navigate to="/write" />} />
      </Routes>
    </>
  );
}
