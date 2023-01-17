import React, { useState, useRef } from "react";

import "./App.css";

function NewTodoFrom({ todosState }) {
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("할 일을 입력해주세요.");
      form.content.focus();

      return;
    }

    todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          autoComplete="off"
          name="content"
          type="text"
          placeholder="할 일을 입력해주세요."
        />
        <input type="submit" value="추가" />
        <input type="reset" value="취소" />
      </form>
    </>
  );
}

function TodoApp({ todosState }) {
  return (
    <>
      <NewTodoFrom todosState={todosState} />
      <hr />
      <ul>
        {todosState.todos.map((todo, index) => (
          <li key={index}>
            {todo.id} {todo.content} {todo.regDate}
          </li>
        ))}
      </ul>
    </>
  );
}

function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: "2023-01-17 12:12:12",
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
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

  return (
    <>
      <TodoApp todosState={todosState} />
    </>
  );
}

export default App;
