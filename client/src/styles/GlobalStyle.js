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

  body {
    margin: 0;
    background: #212121;
    color: #fff;
    font-family: "Circular Std", "sans-serif";
    font-weight: 400;
  }

  button {
    font-family: "Circular Std";
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    padding: 15px 50px;
    background: #1db954;
    border-radius: 25px;
  }
`;

export default GlobalStyle;
