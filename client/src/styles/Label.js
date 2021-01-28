import styled from "styled-components";
import theme from "./theme";

const { fontSize } = theme;

const Label = styled.p`
  font-size: ${fontSize.xs};
  letter-spacing: 2px;
`;

export default Label;
