import React from "react";

interface IItem {
  id: string;
  title: string;
}

interface IProps {
  todos: IItem[];
}

interface IState {
  count: number;
}

const TodoList: React.FC = () => {
  return <div></div>;
};

export default TodoList;
