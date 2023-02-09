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
import produce from "immer";

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
  const lastTodoIdRef = useRef(todos.length == 0 ? 0 : todos[0].id);

  const addTodo = (content) => {
    const id = ++lastTodoIdRef.current;
    const regDate = "2023-02-07 12:12:12";

    const newTodo = {
      id,
      regDate,
      content,
    };

    const newTodos = produce(todos, (draft) => {
      draft.unshift(newTodo);
    });
    setTodos(newTodos);
  };

  const findIndexById = (id) => todos.findIndex((todo) => todo.id == id);

  const findTodoById = (id) => {
    const index = findIndexById(id);

    if (index == -1) return;

    return todos[index];
  };

  const removeTodoById = (id) => {
    const index = findIndexById(id);

    if (index == -1) return;

    const newTodos = produce(todos, (draft) => {
      draft.splice(index, 1);
    });
    setTodos(newTodos);
  };

  const modifyTodoById = (id, content) => {
    const index = findIndexById(id);

    if (index == -1) return;

    const newTodos = produce(todos, (draft) => {
      draft[index].content = content;
    });
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    removeTodoById,
    modifyTodoById,
    findTodoById,
  };
}

function TodoListItem({ todo }) {
  const todosStatus = useTodosStatus();

  return (
    <li>
      {todo.id} : {todo.content}&nbsp;/&nbsp;
      <NavLink to={`/edit/${todo.id}`}>수정</NavLink>&nbsp;/&nbsp;
      <button
        className="ml-2 btn btn-outline"
        onClick={() =>
          window.confirm(`${todo.id}번 할 일을 삭제하시겠습니까?`) &&
          todosStatus.removeTodoById(todo.id)
        }
      >
        삭제
      </button>
    </li>
  );
}

function TodoListPage() {
  const todosStatus = useTodosStatus();

  return (
    <>
      <h1>할 일 리스트</h1>

      <ul>
        {todosStatus.todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
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

function TodoEditPage() {
  const todosStatus = useTodosStatus();
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = todosStatus.findTodoById(id);

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("할 일을 입력해주세요.");
      form.content.focus();

      return;
    }

    todosStatus.modifyTodoById(todo.id, form.content.value);
    navigate("/list", { replace: true });
  };

  return (
    <>
      <h1>할 일 수정</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="content"
          placeholder="할 일을 입력해주세요."
          className="input input-bordered mr-3"
          defaultValue={todo.content}
        />
        <input type="submit" value="수정" className="input input-bordered" />
        <button
          className="ml-1 btn btn-outline"
          onClick={() => navigate("/list")}
        >
          취소
        </button>
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
        <Route path="/edit/:id" element={<TodoEditPage />} />
        <Route path="*" element={<Navigate to="/write" />} />
      </Routes>
    </>
  );
}
