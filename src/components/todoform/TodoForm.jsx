import React, { useState } from "react";
import PropTypes from "prop-types";
// import styles from "./todoform.module.css";
import * as styles from "./todoform.styles";
import { useTheme } from "emotion-theming";

import Button from "../button/Button";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

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
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="10px 0 10px 10px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              ></input>
            </Item>
            <Item padding="10px 0 0 10px">
              {/* <button css={styles.addBtn({ theme })}>Add</button> */}
              <Button text="Add" />
            </Item>
          </Container>
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
  showAdd: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.array.isRequired,
  ]),
};

export default TodoForm;
