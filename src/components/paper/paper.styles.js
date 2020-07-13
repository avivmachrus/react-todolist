import { css } from "@emotion/core";

export const paper = ({ theme }) => {
  return css`
    margin-top: 100px;
    width: 600px;
    height: 800px;
    background-color: ${theme.background.main.paper};
    border-radius: 4px;
    padding: 32px;
  `;
};

export const frame = ({ theme }) => {
  return css`
    border: 1px solid ${theme.color.primary.black};
    height: 100%;
  `;
};
