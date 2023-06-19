import React from "react";

interface IItem {
  id: string;
  title: string;
}

interface IProps {
  todos: IItem[];
}

const TodoList: React.FC<IProps> = (props) => {
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

export default TodoList;
