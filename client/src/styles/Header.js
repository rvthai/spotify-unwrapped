import styled from "styled-components";
import theme from "./theme";
import mixins from "./mixins";

const { color } = theme;

const Header = styled.div`
  ${mixins.flexRow}
  ${mixins.flexSpaceBetween}
  ${mixins.flexAlignEnd}
  border-bottom: 1px solid ${color.gray};
  width: 100%;
`;

export default Header;
