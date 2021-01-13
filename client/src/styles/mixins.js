import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexColumnCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export default mixins;
