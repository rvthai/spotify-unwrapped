import styled from "styled-components";
import mixins from "./mixins";
import media from "./media";

const Main = styled.main`
  ${mixins.flexColumn}
  ${mixins.flexAlignCenter}
  text-align: center;
  padding: 80px 0;

  ${media.tablet`
    padding: 20px 0;
  `}
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
