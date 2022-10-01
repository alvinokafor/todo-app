import React from "react";
import "../assets/styles/TodoInfo.css";

const TodoInfo = ({todos, setTodos, setStatus, itemsLeft}) => {

  //filters out todo items that are not completed
  const deleteHandler = () => {
    setTodos(todos.filter(item => {
      return item.complete !== true
    }))
  }

  const allHandler = (e) => {
    setStatus(e.target.textContent)
  }

  const completeHandler = (e) => {
    setStatus(e.target.textContent)
  }

  const activeHandler = (e) => {
    setStatus(e.target.textContent)
  }

  return (
    <div className="todo-info-container">
      <p className="items-left">{`${itemsLeft.length} item (s) left`}</p>
      <div className="status">
        <span
        onClick={allHandler}
        >All</span>
        <span
        onClick={activeHandler}
        >Active</span>
        <span
        onClick={completeHandler}>Completed</span>
      </div>
      <p 
      onClick={deleteHandler}
      className="clear-items">Clear Completed</p>
    </div>
  );
};

export default TodoInfo;
