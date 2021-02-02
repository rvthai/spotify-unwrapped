import styled from "styled-components";
import theme from "./theme";
import mixins from "./mixins";
import media from "./media";

const { color } = theme;

const Nav = styled.nav`
  position: fixed;
  left: 0;
  width: 100px;
  min-height: 100vh;
  ${mixins.flexColumn}
  ${mixins.flexSpaceBetween}
  ${mixins.flexAlignCenter}
  background: ${color.black};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  z-index: 1;

  ${media.tablet`
    right: 0;
    bottom: 0;
    width: 100%;
    min-height: 0;
  `};
`;

export default Nav;
