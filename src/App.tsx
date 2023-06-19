import React from "react";
import { useState } from "react";
import { IItem } from "./types/todo";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  const todoAddHandle = (todo: IItem) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random().toString(), title: todo.title },
      ];
    });
  };

  return (
    <div className="App">
      <AddTodo onAddTodo={todoAddHandle} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
