import React from "react";
import PropTypes from "prop-types";
import styles from "./header.module.css";

import Button from "../button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      {/* add button */}
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />

      {/* title */}
      <h1 className={styles.headerTitle}>Todo Lists</h1>

      {/* clear button */}
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired,
};

export default Header;
