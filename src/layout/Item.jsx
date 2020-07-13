import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const Item = ({ children, flex, textAlign }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${textAlign};
      `}
    >
      {children}
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(["left", "right", "center", "justify"]),
};

export default Item;
