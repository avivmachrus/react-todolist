import React, { useState } from "react";
import PropTypes from "prop-types";
// import styles from "./todoform.module.css";
import * as styles from "./todoform.styles";
import { useTheme } from "emotion-theming";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");
  const theme = useTheme();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // check empty form
    if (!value) {
      alert("Empty todo not allowed !");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter todo !");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            css={styles.addInput({ theme })}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button css={styles.addBtn({ theme })}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

// define addTodo props
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
};

export default TodoForm;
