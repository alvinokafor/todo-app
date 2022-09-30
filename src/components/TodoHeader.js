import React from "react";
import "../assets/styles/TodoHeader.css";
import sun from "../assets/images/icon-sun.svg";

const TodoHeader = () => {
  return (
    <div className="todo-header">
      <h1>TODO</h1>
      <div>
        <img src={sun} alt="sun icon" />
      </div>
    </div>
  );
};

export default TodoHeader;
