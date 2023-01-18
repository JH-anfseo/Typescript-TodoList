import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { ITodo } from "./components/Type";

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  return (
    <>
      <header>헤더</header>
      <main style={{ padding: "20px", background: "green" }}>
        <Input setTodoList={setTodoList} />
        <TodoList
          isActive={true}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <TodoList
          isActive={false}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </main>
      <footer></footer>
    </>
  );
}
export default App;
