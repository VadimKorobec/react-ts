import React from "react";
import { useRef } from "react";

export const AddTodo: React.FC = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form>
        <label>
          Add title
          <input type="text" id="add-todo" />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
