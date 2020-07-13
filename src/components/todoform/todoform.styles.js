import { css } from "@emotion/core";

// export const add = () =>
//   css`
//     padding: 16px;
//   `;

// export const addForm = () => {
//   return css`
//     display: flex;
//     align-items: flex-start;
//   `;
// };

export const addInput = ({ theme }) => {
  return css`
    text-align: center;
    background: none;
    border: none;
    padding: 0 64px;
    width: 100%;
    border-bottom: 1px solid ${theme.color.primary.red};
    outline: none;
    font-family: "Homemade Apple", sans-serif;
    font-size: 1.6rem;
    text-transform: lowercase;
  `;
};
