import React from "react";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";
import "../assets/styles/TodoItemWrapper.css";

const TodoItemWrapper = ({todos, setTodos, setStatus, filteredTodos, itemsLeft}) => {

  return (
    <section className="todo-item-wrapper">
      {filteredTodos.map((todo) => (
        <TodoItem 
        todos={todos}
        todo={todo} 
        key={todo.id}
        setTodos={setTodos}
        />
      ))}

      <TodoInfo 
        itemsLeft={itemsLeft}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
    </section>
  );
};

export default TodoItemWrapper;
