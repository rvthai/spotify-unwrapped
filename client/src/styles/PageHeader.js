import styled from "styled-components";
import mixins from "./mixins";

const PageHeader = styled.div`
  ${mixins.flexRow}
  ${mixins.flexWrap}
  ${mixins.flexSpaceBetween}
  ${mixins.flexAlignEnd}
  width: 100%;
`;

export default PageHeader;
