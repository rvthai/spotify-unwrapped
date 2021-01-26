import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "./theme";

const { color, fontSize } = theme;

const MoreLink = styled(Link)`
  color: ${color.lightGray};
  font-size: ${fontSize.xs};
  letter-spacing: 2px;
  text-decoration: none;
  margin: 5px 0 5px 0;
  transition: all 0.2s;

  &:hover {
    color: ${color.white};
  }
`;

export default MoreLink;
