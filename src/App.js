import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  }

  const onAddBtnClick = () => {
    addTodo(todos.length + 1);
  };

  const onRemoveBtnClick = () => {
    removeTodo(1);
  };

  return (
    <>
      <div>{JSON.stringify(todos)}</div>
      <button onClick={onAddBtnClick}>추가</button>
      <button onClick={onRemoveBtnClick}>삭제</button>
    </>
  );
}

export default App;
