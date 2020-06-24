import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React!", isCompleted: false },
  ]);

  // show and hide (toggle) add button state
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    // take recent todos from todos(...todos) and add with new todos with value
    const addedTodo = [...todos, { text: value, isCompleted: false }];

    // set addedTodo to todos
    setTodos(addedTodo);
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;