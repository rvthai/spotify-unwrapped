import styled from "styled-components";
import mixins from "./mixins";
import theme from "./theme";

const { color, fontSize } = theme;

const Text = styled.text`
  color: ${color.lightGray};
  font-size: ${fontSize.sm};
  ${mixins.ellipsis}
`;

export default Text;
