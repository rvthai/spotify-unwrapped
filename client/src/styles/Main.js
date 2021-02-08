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
