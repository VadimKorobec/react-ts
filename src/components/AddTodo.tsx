import React, { useState } from "react";
import { IItem } from "../types/todo";

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

type OnlyTitle = Pick<IItem, "title">;

export const AddTodo: React.FC<IProps> = (props) => {
  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    titleTodo({
      title: e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!todo.title) {
      return;
    }

    props.onAddTodo(todo as IItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add title
          <input type="text" id="add-todo" onChange={titleHandler} />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
