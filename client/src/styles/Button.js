import styled from "styled-components";
import theme from "./theme";

const { color, fontSize } = theme;

const Button = styled.button`
  color: ${color.white};
  padding: 8px 35px;
  border-radius: 500px;
  border: none;
  outline: none;
  text-decoration: none;
  font-size: ${fontSize.xs};
  letter-spacing: 2px;
`;

export default Button;
