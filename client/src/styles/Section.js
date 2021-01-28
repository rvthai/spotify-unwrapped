import styled from "styled-components";
import mixins from "./mixins";

const Section = styled.section`
  ${mixins.flexColumn}
  ${mixins.flexCenter}
  ${mixins.flexWrap}
  padding: 20px 0;
  width: 75%;
`;

export default Section;
