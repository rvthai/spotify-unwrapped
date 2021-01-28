import styled from "styled-components";
import theme from "./theme";

const { fontSize } = theme;

const Label = styled.p`
  letter-spacing: 2px;
  font-size: ${fontSize.xs};
`;

export default Label;
