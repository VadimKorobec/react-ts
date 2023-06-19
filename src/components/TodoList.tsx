import React from "react";
import { IItem } from "../types/todo";

interface IProps {
  todos: IItem[];
  onRemoveTodo: (id: string) => void;
}

export const TodoList: React.FC<IProps> = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((item) => (
          <li key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
