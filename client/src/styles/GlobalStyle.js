import { createGlobalStyle } from "styled-components";
import CircularFont from "../fonts/CircularStd-Book.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Circular";
    src: url(${CircularFont}) format('truetype');
  }

  body {
    margin: 0;
    background: #212121;
    color: #fff;
    font-family: "Circular", "sans-serif";
  }
`;

export default GlobalStyle;
