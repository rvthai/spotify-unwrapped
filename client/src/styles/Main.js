import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
`;

export default Main;

/*
Big desktops : 1440px
Desktops: 1200 px
Laptops: 1000 px
Tablets: 768 px
Portrait tablets: 600 px
Landscape phones: 480px
Smartphones: 376px
Tiny phones: 320px
*/

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
