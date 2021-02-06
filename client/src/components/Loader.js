import React from "react";
import styled, { keyframes } from "styled-components";
import { mixins } from "styles";

const Container = styled.div`
  ${mixins.flexCenter};

  ${(props) =>
    props.isPage &&
    `
    width: 100%;
    height: 100vh;
  `}
`;

const wave = keyframes`
  from {
    height: 2px;
  }

  to {
    height: 100%;
  }
`;
const Bars = styled.div`
  ${mixins.flexCenter}
  overflow: hidden;
  height: 20px;
`;
const Bar = styled.div`
  width: 2px;
  height: 10px;
  margin: 0 1.5px;
  background-color: ${(props) => props.color};
  animation-name: ${wave};
  animation-duration: 500ms;
  animation-play-state: running;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: ${(props) => props.delay};
`;

const Loader = (props) => (
  <Container isPage={props.isPage}>
    <Bars>
      <Bar color={props.color} delay="350ms" />
      <Bar color={props.color} delay="150ms" />
      <Bar color={props.color} delay="0ms" />
      <Bar color={props.color} delay="150ms" />
      <Bar color={props.color} delay="350ms" />
    </Bars>
  </Container>
);

export default Loader;
