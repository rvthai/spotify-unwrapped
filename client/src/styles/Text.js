import styled from "styled-components";
import mixins from "./mixins";
import theme from "./theme";

const { fontSize } = theme;

const Text = styled.p`
  font-size: ${fontSize.sm};
  ${mixins.ellipsis}
`;

export default Text;
