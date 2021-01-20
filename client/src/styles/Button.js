import styled from "styled-components";
import theme from "./theme";

const { fontSize } = theme;

const Button = styled.button`
  margin: 1em 0;
  padding: 8px 35px;
  border-radius: 500px;
  border: none;
  outline: none;
  text-decoration: none;
  font-size: ${fontSize.xs};
  letter-spacing: 2px;
  transition: all 0.2s;
`;

export default Button;
