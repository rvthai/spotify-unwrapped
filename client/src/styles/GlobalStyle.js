import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Circular";
    src: url("../fonts/CircularStd-Book.woff") format('woff');
  }

  body {
    margin: 0;
    background: #212121;
    color: #fff;
    font-family: "Circular", "sans-serif";
  }
`;

export default GlobalStyle;
