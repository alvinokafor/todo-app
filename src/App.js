import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoHeader from "./components/TodoHeader";
import TodoWrapper from "./components/TodoWrapper";
import TodoInput from "./components/TodoInput";
// import { v4 as uuidv4 } from "uuid";
import TodoItemWrapper from "./components/TodoItemWrapper";
import "./index.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  //function to filter todos
  const filterHandler = () => {
    switch (status) {
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.complete === false));
        break;
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.complete === true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //gets unccompleted items
  let itemsLeft = todos.filter(todo => {
    return todo.complete === false
  })

  return (
    <main className="main-container">
      <Header />

      <TodoWrapper>
        <TodoHeader />
        <TodoInput
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
        />
        <TodoItemWrapper
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
          itemsLeft={itemsLeft}
          // status={status}
          // setFilterState={setFilterState}
          // filterState={filterState}
        />
      </TodoWrapper>
    </main>
  );
};

export default App;
