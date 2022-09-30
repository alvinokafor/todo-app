import React, { useState } from "react";
import Header from "./components/Header"
import TodoHeader from "./components/TodoHeader";
import TodoWrapper from "./components/TodoWrapper";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from "uuid";
import TodoItemWrapper from "./components/TodoItemWrapper";
import "./index.css";

const DUMMY_DATA = [
  {
    id: uuidv4(),
    title: "go to the gym",
    complete: false,
  },

  {
    id: uuidv4(),
    title: "eat some food",
    complete: false,
  },
];

const App = () => {
const [inputText, setInputText] = useState('')
const [todos, setTodos] = useState(DUMMY_DATA)


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
          // setFilterState={setFilterState}
          // filterState={filterState}
        />
      </TodoWrapper>
    </main>
  );
}

export default App;
