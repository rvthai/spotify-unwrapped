import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexJustifyCenter: css`
    display: flex;
    justify-content: center;
  `,

  flexAlignCenter: css`
    display: flex;
    align-items: center;
  `,

  flexAlignEnd: css`
    display: flex;
    align-items: flex-end;
  `,

  flexAlignStart: css`
    display: flex;
    align-items: flex-start;
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

  ellipsis: css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
};

export default mixins;
