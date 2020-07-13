import PropTypes from "prop-types";

import * as styles from "./button.styles";
import { useTheme } from "emotion-theming";
import { jsx } from "@emotion/core";

const Button = ({ text, onClick, color, align }) => {
  const theme = useTheme();

  return jsx(
    "button",
    {
      css: styles.button({ color, align, theme }),
      onClick: onClick,
    },
    text
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"]),
};

export default Button;
