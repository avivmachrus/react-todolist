import React, { useState } from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoform/TodoFormClass";
import Todos from "../components/todos/TodosClass";

import Container from "../layout/Container";
import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";

const TodoList = () => {
  // const [todos, setTodos] = useState([
  //   { text: "Learning React!", isCompleted: false },
  //   { text: "Learning React!", isCompleted: false },
  //   { text: "Learning React!", isCompleted: false },
  // ]);
  // const [todos, setTodos] = useState(
  //   // data in localstorage is a string
  //   // if there is todos in localStorage take and parse into JSON
  //   // else make an empty array
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);
  const [todos, setTodos] = useStateWithLocalStorage("todos");

  // show and hide (toggle) add button state
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    if (todos.length < 10) {
      // take recent todos from todos(...todos) and add with new todos with value
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      // set addedTodo to todos
      setTodos(addedTodo);
    } else {
      alert("only 10 todos is allowed!");
    }
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
