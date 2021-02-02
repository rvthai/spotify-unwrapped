import styled from "styled-components";
import mixins from "./mixins";
import media from "./media";

const PageHeader = styled.div`
  ${mixins.flexRow}
  ${mixins.flexWrap}
  ${mixins.flexSpaceBetween}
  ${mixins.flexAlignEnd}
  width: 100%;

  ${media.laptop`
    ${mixins.flexCenter}
  `}
`;

export default PageHeader;
