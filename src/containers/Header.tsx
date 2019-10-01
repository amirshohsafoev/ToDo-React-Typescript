import * as React from "react";
import TodoTextInput from "../components/TodoTextInput";



const Header = () => (
  <header className="header">
    <h1>List of todos</h1>
    <TodoTextInput
      newTodo
      placeholder="What needs to be done?"
    />
  </header>
);

export default Header