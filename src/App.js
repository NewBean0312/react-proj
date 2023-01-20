import React, { useState, useRef, useEffect } from "react";
import { AppBar, Button, TextField, Toolbar, Chip } from "@mui/material";

function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date()),
    };

    setTodos((todos) => [...todos, newTodo]);
  };

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) =>
      _index != index ? todo : { ...todo, content: newContent }
    );
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    modifyTodo,
  };
}

function App() {
  const todosState = useTodosState();

  useEffect(
    () => (
      todosState.addTodo("운동"),
      todosState.addTodo("요리"),
      todosState.addTodo("공부")
    ),
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("할일을 입력해주세요.");
      form.content.focus();

      return;
    }

    todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className="justify-center">
          <div className="flex-1"></div>
          <div className="flex-bold">HAPPY NOTE</div>
          <div className="flex-1"></div>
        </Toolbar>
      </AppBar>
      <form onSubmit={onSubmit} className="flex flex-col mt-4 px-4 gap-2">
        <TextField
          autoComplete="off"
          name="content"
          type="text"
          label="할일을 입력해주세요."
          variant="outlined"
        />
        <Button variant="contained">추가</Button>
      </form>
      <div className="mt-4 px-4">
        <ul>
          {todosState.todos.map((todo) => (
            <li key={todo.id} className="mt-10">
              <div className="flex gap-2">
                <Chip label={`번호 : ${todo.id}`} variant="outlined" />
                <Chip label={todo.regDate} variant="outlined" color="primary" />
              </div>
              <div className="mt-4 p-10 shadow rounded-[20px]">{todo.content}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

// 유틸리티

// 날짜 객체 입력받아서 문장(yyyy-mm-dd hh:mm:ss)으로 반환한다.
function dateToStr(d) {
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  };

  return (
    d.getFullYear() +
    "-" +
    pad(d.getMonth() + 1) +
    "-" +
    pad(d.getDate()) +
    " " +
    pad(d.getHours()) +
    ":" +
    pad(d.getMinutes()) +
    ":" +
    pad(d.getSeconds())
  );
}
