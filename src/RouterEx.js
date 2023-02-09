import React, { useState, useRef } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  NavLink,
  useParams,
  useNavigate,
} from "react-router-dom";
import { atom, useRecoilState } from "recoil";

const todosAtom = atom({
  key: "recoil/todosAtom",
  default: [
    { id: 3, regDate: "2023-02-07 12:12:12", content: "운동" },
    { id: 2, regDate: "2022-02-07 12:12:12", content: "요리" },
    { id: 1, regDate: "2021-02-07 12:12:12", content: "공부" },
  ],
});

function useTodosStatus() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const lastTodoIdRef = useRef(todos[0].id);

  const addTodo = (content) => {
    const id = ++lastTodoIdRef.current;
    const regDate = "2023-02-07 12:12:12";

    const newTodo = {
      id,
      regDate,
      content,
    };

    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
  };
}

function TodoListPage() {
  const todosStatus = useTodosStatus();

  return (
    <>
      <h1>할 일 리스트</h1>

      <ul>
        {todosStatus.todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} : {todo.content}
          </li>
        ))}
      </ul>
    </>
  );
}

function TodoWritePage() {
  const todosStatus = useTodosStatus();
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("할 일을 입력해주세요.");
      form.content.focus();

      return;
    }
    todosStatus.addTodo(form.content.value);

    form.content.value = "";
    form.content.focus();
  };

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
      <div>{todosStatus.todos.length}</div>
    </>
  );
}

export default function ReouterEx() {
  const location = useLocation();

  return (
    <>
      <header>
        <NavLink
          to="/list"
          style={({ isActive }) => ({ color: isActive ? "red" : null })}
        >
          리스트
        </NavLink>
        /
        <NavLink
          to="/write"
          style={({ isActive }) => ({ color: isActive ? "red" : null })}
        >
          작성
        </NavLink>
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
