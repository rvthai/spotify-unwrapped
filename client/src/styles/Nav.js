import styled from "styled-components";
import media from "./media";
import mixins from "./mixins";

const Nav = styled.nav`
  position: fixed;
  min-height: 100vh;
  width: 100px;
  left: 0;
  background: #000;
  ${mixins.flexColumn};
  ${mixins.flexSpaceBetween};
  ${mixins.flexAlignCenter};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;

  ${media.tablet`
    min-height: 0;
    width: 100%;
    bottom: 0;
    right: 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  `};
`;

export default Nav;
