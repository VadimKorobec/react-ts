import React from "react";
import { useRef } from "react";

export const AddTodo: React.FC = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add title
          <input type="text" id="add-todo" ref={titleInputRef} />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
