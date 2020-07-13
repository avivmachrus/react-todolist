import { css } from "@emotion/core";

// export const header = () => {
//   return css`
//     display: flex;
//     align-items: flex-start;
//   `;
// };

export const headerTitle = (theme) => {
  return css`
    text-align: center;
    font-size: 3.6rem;
    font-family: "Homemade Apple", sans-serif;
    text-transform: lowercase;
    color: ${theme.color.primary.black};
  `;
};
