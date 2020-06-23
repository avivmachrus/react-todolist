import React from "react";
import PropTypes from "prop-types";

const Todo = (props) => {
  return (
    <div className="todo">
      <span className="todo-text">{props.text}</span>
    </div>
  );
};

Todo.propTypes = {
  // must contain string type
  text: PropTypes.string.isRequired,
};

export default Todo;
