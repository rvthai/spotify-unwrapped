import styled from "styled-components";
import mixins from "./mixins";
import theme from "./theme";

const { fontSize } = theme;

const Text = styled.p`
  font-size: ${fontSize.sm};
`;

export default Text;
