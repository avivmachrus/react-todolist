import { css } from "@emotion/core";

export const add = () =>
  css`
    padding: 16px;
  `;

export const addForm = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const addInput = ({ theme }) => {
  return css`
    text-align: center;
    background: none;
    border: none;
    padding: 0 64px;
    flex: 1;
    border-bottom: 1px solid ${theme.color.primary.red};
    outline: none;
    font-family: "Homemade Apple", sans-serif;
    font-size: 1.6rem;
    text-transform: lowercase;
  `;
};

export const addBtn = ({ theme }) => {
  return css`
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    padding: 10px;
    padding-right: unset;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
    &:active {
      text-shadow: 1px 1px 2px ${theme.color.primary.black};
    }
  `;
};
