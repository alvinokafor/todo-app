import React from "react";
import styles from "../assets/styles/TodoItem.module.css";

const TodoItem = ({todos, todo, setTodos}) => {

  //loops over todos & assigns status of true or false when checkmark is clicked
  const checkHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item;
      })
    )
  }

  return (
    <div className={styles["todo-items"]}>
      <div className={styles["todo-checkbox"]}>
        <input
          onChange={checkHandler}
        //   checked={todo.isComplete}
          id="checkbox"
          type="checkbox"
          // name={styles["todoCheck"]}
          className={styles["todo-checkbox"]}
        />
      </div>
      <label
        htmlFor="checkbox"
        className={`${styles["todo-title"]} 
        ${todo.isComplete && styles["todo-completed"]}
        `}
      >
        {todo.title}
      </label>
    </div>
  );
};

export default TodoItem;
