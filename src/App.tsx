import React from "react";
import { useState } from "react";
import { IItem } from "./types/todo";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  const todoAddHandle = (todo: IItem) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), title: todo.title },
    ]);
  };

  const todoRemoveHandle = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  return (
    <div>
      <AddTodo onAddTodo={todoAddHandle} />
      <TodoList onRemoveTodo={todoRemoveHandle} todos={todos} />
    </div>
  );
};

export default App;
