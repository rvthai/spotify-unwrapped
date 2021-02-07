import styled from "styled-components";
import media from "./media";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2em;
  row-gap: 2em;
  width: 100%;
  margin-top: 2em;

  ${media.tablet`
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  `}

  ${media.phone`
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  `}
`;

export default Grid;
