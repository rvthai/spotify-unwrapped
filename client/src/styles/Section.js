import styled from "styled-components";
import mixins from "./mixins";
import media from "./media";

const Section = styled.section`
  ${mixins.flexColumn}
  ${mixins.flexWrap}
  ${mixins.flexCenter}
  padding: 20px 0;
  width: 1000px;

  ${media.desktop`
    width: 75%;
  `}
`;

export default Section;
