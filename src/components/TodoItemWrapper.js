import React from "react";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";
import "../assets/styles/TodoItemWrapper.css";

const TodoItemWrapper = ({todos}) => {

  return (
    <section className="todo-item-wrapper">
      {todos.map((todo) => (
        <TodoItem 
        todo={todo} 
        key={todo.id}
        // editHandler={props.editHandler} 
        // title={todo.title} 
        />
      ))}

      <TodoInfo />
    </section>
  );
};

export default TodoItemWrapper;
