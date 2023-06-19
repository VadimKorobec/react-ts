import React from "react";

import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "1", title: "text" }];
  return (
    <div className="App">
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
