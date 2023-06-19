import React from "react";

export const AddTodo: React.FC = () => {
  return (
    <div>
      <form>
        <label>
          Add title
          <input type="text" />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
