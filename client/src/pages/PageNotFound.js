import React from "react";
import styled from "styled-components";
import { Main, Section, Button } from "styles";
import { theme } from "styles";
import { useHistory } from "react-router-dom";

const { color, fontWeight } = theme;

const CenteredSection = styled(Section)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const HomeButton = styled(Button)`
  margin-top: 5em;
  background: ${color.green};
  color: ${color.white};
  cursor: pointer;
`;

function PageNotFound() {
  const history = useHistory();

  const handleClick = () => history.push("/");

  return (
    <Main>
      <CenteredSection>
        <h1>Sorry.</h1>
        <p>We couldn't find the page you were looking for.</p>
        <HomeButton onClick={handleClick}>GO HOME</HomeButton>
      </CenteredSection>
    </Main>
  );
}

export default PageNotFound;
