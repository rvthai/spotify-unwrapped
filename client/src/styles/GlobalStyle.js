import { createGlobalStyle } from "styled-components";
import font from "../fonts";

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
    foint-size: 16px;
    background-color: #212121;
    color: #fff;
  }

  h1 {
    letter-spacing: -0.025em;
    margin: 0 0 10px;
    font-weight: 900;
    font-size: 90px;
  }

  a {
    letter-spacing: 2px;
    text-decoration: none;
    color: #fff;
  }
`;

export default GlobalStyle;

/*
  ${media.desktop`
    padding: 60px 50px;
  `};
  ${media.tablet`
    padding: 50px 40px;
  `};
  ${media.phablet`
    padding: 30px 25px;
  `};
  h2 {
    ${media.tablet`
      text-align: center;
    `};
  }
*/
