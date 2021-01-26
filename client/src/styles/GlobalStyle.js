import { createGlobalStyle } from "styled-components";
import font from "../fonts";
import theme from "./theme";

const { color, fontSize } = theme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Circular Std";
    src: url(${font.black}) format('truetype');
    font-style: normal;
    font-weight: 900;
  }

  @font-face {
    font-family: "Circular Std";
    src: url(${font.bold}) format('truetype');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: "Circular Std";
    src: url(${font.medium}) format('truetype');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: "Circular Std";
    src: url(${font.book}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit,
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    min-height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: "Circular Std", "sans-serif";
    font-size: 16px;
    background-color: ${color.offBlack};
    color: #fff;
  }

  h1, h2 {
    font-size: ${fontSize.xxl};
    letter-spacing: -0.025em;
    margin: 10px 0 10px 0;
  }

  h1 {
    font-weight: 900;
  }

  h2, h3 {
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 8vw;
    }
  }

  h3 {
    font-size: ${fontSize.lg};
    margin: 5px 0 5px 0;
  }

  p {
    color: ${color.lightGray};
    font-size: ${fontSize.xs};
    font-weight: 400;
    margin: 0;
  }

  button {
    font-family: "Circular Std", "sans-serif";
    font-weight: 500;
  }

  .fit {
    display: inline-block;
    white-space: nowrap;
    word-wrap: break-word;
  }
`;

export default GlobalStyle;
