import React from "react";
import "../assets/styles/TodoInfo.css";

const TodoInfo = () => {
  return (
    <div className="todo-info-container">
      <p className="items-left">5 items left</p>
      <div className="status">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <p className="clear-items">Clear Completed</p>
    </div>
  );
};

export default TodoInfo;
