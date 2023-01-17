import React, { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newContent) => {
    const newTodo = {
      id: 1,
      content: newContent,
      regDate: "2023-01-17 12:12:12",
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const onBtnAddTodoClick = () => {
    addTodo("안녕");
  };

  return (
    <>
      <button onClick={onBtnAddTodoClick}>추가</button>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.id} {todo.content} {todo.regDate}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
