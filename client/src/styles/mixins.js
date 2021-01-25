import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexAlignCenter: css`
    display: flex;
    align-items: center;
  `,

  flexSpaceBetween: css`
    display: flex;
    justify-content: space-between;
  `,

  flexWrap: css`
    display: flex;
    flex-wrap: wrap;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
  `,
};

export default mixins;
