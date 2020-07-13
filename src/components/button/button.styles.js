import { css } from "@emotion/core";

export const button = ({ color, align, theme }) => {
  let textColor;

  const {
    color: { primary },
  } = theme;

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

  return css`
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    padding: 15px;
    background: unset;
    border: unset;
    outline: unset;
    cursor: pointer;
    margin-top: -15px;
    text-align: ${align};
    color: ${textColor};
  `;
};
