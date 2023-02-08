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
const onSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  form.content.value = form.content.value.trim();

  if (form.content.value.length == 0) {
    alert("할 일을 입력해주세요.");
    form.content.focus();
    
    return;
  }

  form.content.value = "";
  form.content.focus();
}

  return (
    <>
      <h1>할 일 작성</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="content"
          placeholder="할 일을 입력해주세요."
          className="input input-bordered mr-3"
        />
        <input type="submit" value="작성" className="input input-bordered" />
      </form>
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
