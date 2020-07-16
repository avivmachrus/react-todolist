import React from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoform/TodoFormClass";
import Todos from "../components/todos/TodosClass";

import Container from "../layout/ContainerClass";

class TodoList extends React.Component {
  state = {
    todos: [],
    showAdd: false,
  };

  componentDidMount() {
    const todosStateLocalStorage =
      JSON.parse(localStorage.getItem("todos")) || [];
    const showAddStateLocalStorage =
      JSON.parse(localStorage.getItem("showAdd")) || false;

    this.setState({
      todos: todosStateLocalStorage,
      showAdd: showAddStateLocalStorage,
    });
  }

  componentDidUpdate() {
    const { todos, showAdd } = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("showAdd", JSON.stringify(showAdd));
  }

  addTodo = (value) => {
    const { todos } = this.state;
    if (todos.length < 10) {
      // take recent todos from todos(...todos) and add with new todos with value
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      // set addedTodo to todos
      this.setState({ todos: addedTodo });
    } else {
      alert("only 10 todos is allowed!");
    }
  };

  completeTodo = (index) => {
    const { todos } = this.state;
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    this.setState({ todos: addedTodo });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("click finish to clear your todos");
      return;
    }

    this.setState({
      todos: [],
    });
  };

  showAddToggle = () => {
    this.setState((prevState) => ({ showAdd: !prevState.showAdd }));
  };

  render() {
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Header
            showAddToggle={this.showAddToggle}
            showAdd={this.state.showAdd}
            clearTodos={this.clearTodos}
          />
          <TodoForm addTodo={this.addTodo} showAdd={this.state.showAdd} />
          <Todos todos={this.state.todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
