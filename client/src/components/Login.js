import React from "react";
import styled from "styled-components";
import { Main, Section, Button } from "styles";
import { theme } from "styles";

const { color, fontWeight, transition } = theme;

const CenteredSection = styled(Section)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const LoginButton = styled(Button)`
  font-weight: ${fontWeight.bold};
  background-color: ${color.green};
  padding: 15px 40px;
  margin-top: 1em;
  transition: ${transition};
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: ${color.lightGreen};
    }
  }

  &:active {
    background-color: ${color.darkGreen};
  }
`;

function Login() {
  const URL =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8888/login"
      : "https://myspotifyunwrapped.herokuapp.com/login";

  return (
    <Main>
      <CenteredSection>
        <h1>Spotify Unwrapped</h1>
        <LoginButton as="a" href={URL}>
          LOG IN WITH SPOTIFY
        </LoginButton>
      </CenteredSection>
    </Main>
  );
}

export default Login;
