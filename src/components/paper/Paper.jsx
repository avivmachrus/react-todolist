import React from "react";
import PropTypes from "prop-types";
import styles from "./paper.module.css";

const Paper = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  // define children contain type one or two react component
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Paper;
