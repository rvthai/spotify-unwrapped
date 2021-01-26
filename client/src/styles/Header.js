import styled from "styled-components";
import theme from "./theme";
import mixins from "./mixins";

const { color } = theme;

const Header = styled.div`
  ${mixins.flexRow}
  ${mixins.flexSpaceBetween}
  ${mixins.flexAlignEnd}
  align-items: flex-end;
  border-bottom: 1px solid ${color.darkGray};
  margin-bottom: 0.5em;
  width: 100%;
`;

export default Header;
