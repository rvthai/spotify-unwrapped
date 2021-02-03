import styled from "styled-components";
import mixins from "./mixins";
import media from "./media";

const PageHeader = styled.div`
  ${mixins.flexRow}
  ${mixins.flexSpaceBetween}
  ${mixins.flexAlignEnd}
  width: 100%;

  ${media.tablet`
    ${mixins.flexColumn}
    ${mixins.flexCenter}
  `}
`;

export default PageHeader;
