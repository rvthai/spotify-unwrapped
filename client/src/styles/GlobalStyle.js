import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts";
import theme from "./theme";
import media from "./media";

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
    font-family: 'Circular Std', 'system', '-apple-system', 'BlinkMacSystemFont', 'sans-serif';
    font-size: 16px;
    background-color: ${color.darkGray};
    color: #fff;
  }

  h1, h2 {
    font-size: ${fontSize.xxl};
    letter-spacing: -0.025em;
    margin: 10px 0 10px 0;

    ${media.tablet`
      font-size: 8vw;
    `}
  }

  h1 {
    font-weight: 900;
  }

  h2, h3 {
    font-weight: 700;
  }

  h3 {
    font-size: ${fontSize.lg};
    margin: 5px 0 5px 0;
  }

  p {
    color: ${color.lightGray};
    font-size: ${fontSize.md};
    font-weight: 400;
    margin: 0;

    ${media.tablet`
      font-size: ${fontSize.sm};
    `}
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: "Circular Std", "sans-serif";
    font-weight: 500;
  }
`;

export default GlobalStyle;
