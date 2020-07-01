import { css } from "@emotion/core";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
      break;
  }

  return css`
    width: 42%;
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
