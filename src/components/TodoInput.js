import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../assets/styles/TodoInput.css";

const TodoInput = ({inputText, setInputText, setTodos}) => {

//sets the input text
const newTodoHandler = (e) => {
  setInputText(e.target.value)
}

//generates new todo list based on user input
const submitHandler = (e) => {
  e.preventDefault()

  setTodos((prev) => {
    return [
      {
        id: uuidv4(),
        title: inputText,
        complete: false,
      }, ...prev
    ]
  })
}




  return (
    <section className="todo-input-container">
      <form 
      onSubmit={submitHandler}
      >
        <input
          onChange={newTodoHandler}
          name='todoTitle'
          className="add-todo"
          placeholder="Add a new Todo"
        ></input>
      </form>
    </section>
  );
};

export default TodoInput;
