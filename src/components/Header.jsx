import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      {/* add button */}
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />

      {/* title */}
      <h1 className="header-title">Todo Lists</h1>

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
