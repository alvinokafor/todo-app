import React from "react";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";
import "../assets/styles/TodoItemWrapper.css";

const TodoItemWrapper = ({todos, setTodos}) => {

  return (
    <section className="todo-item-wrapper">
      {todos.map((todo) => (
        <TodoItem 
        todos={todos}
        todo={todo} 
        key={todo.id}
        setTodos={setTodos}
        // editHandler={props.editHandler} 
        // title={todo.title} 
        />
      ))}

      <TodoInfo />
    </section>
  );
};

export default TodoItemWrapper;
