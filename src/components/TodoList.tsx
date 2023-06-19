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

class TodoList extends React.Component<IProps, IState> {
  stateHandler() {}
  render(): React.ReactNode {
    return null;
  }
}

export default TodoList;
