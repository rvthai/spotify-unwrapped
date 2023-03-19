import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Main, Section, Button } from "styles";
import { theme } from "styles";

const { color, transition } = theme;

const CenteredSection = styled(Section)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const HomeButton = styled(Button)`
  background-color: ${color.green};
  color: ${color.white};
  margin-top: 5em;
  transition: ${transition};
  cursor: pointer;
  padding: 10px 35px;

  &:hover {
    background-color: ${color.lightGreen};
  }

  &:active {
    background-color: ${color.darkGreen};
  }
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
