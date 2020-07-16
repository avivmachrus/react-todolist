import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const Item = ({ children, flex, textAlign, padding }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${textAlign};
        padding: ${padding};
      `}
    >
      {children}
    </div>
  );
};

Item.defaultProps = {
  textAlign: "left",
  padding: "unset",
};
Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textAlign: PropTypes.oneOf(["left", "right", "center", "justify"]),
  padding: PropTypes.string,
};

export default Item;
