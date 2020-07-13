import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  font-size: 1.8rem;
  font-family: "Bungee", sans-serif;
  padding: 15px;
  background: unset;
  border: unset;
  outline: unset;
  cursor: pointer;
  margin-top: -15px;
  text-align: ${(props) => props.align};
  color: ${(props) => props.textColor};
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, align, theme } = this.props;
    const {
      color: { primary },
    } = theme;

    let textColor;
    switch (color) {
      case "black":
        textColor = primary.black;
        break;
      case "red":
        textColor = primary.red;
        break;
      default:
        textColor = primary.black;
        break;
    }

    return (
      <StyledButton textColor={textColor} align={align} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }
  static defaultProps = {
    text: "Button",
    color: "black",
    align: "left",
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"]),
  };
}

export default withTheme(Button);
