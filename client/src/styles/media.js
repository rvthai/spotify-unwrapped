import { css } from "styled-components";

const sizes = {
  desktop: 1200,
  tablet: 768,
  phone: 376,
};

const media = Object.keys(sizes).reduce((accumulator, display) => {
  const em = sizes[display] / 16;
  accumulator[display] = (...args) => css`
    @media screen and (max-width: ${em}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
