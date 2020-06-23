import React from "react";
import PropTypes from "prop-types";

const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">{children}</div>
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
