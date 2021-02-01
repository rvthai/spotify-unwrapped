import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { theme, mixins } from "styles";
const { color } = theme;

const Container = styled.div`
  ${mixins.flexCenter};
`;
const dance = keyframes`
  from {
    height: 2px;
  }
  to {
    height: 100%;
  }
`;
const Bars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 20px;
  z-index: 2;
  position: relative;
  left: 0;
  right: 0;
`;
const Bar = styled.div`
  width: 2px;
  height: 10px;
  margin: 0 2px;
  background-color: ${color.gray};
  animation-name: ${dance};
  animation-duration: 500ms;
  animation-play-state: running;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: ${(props) => props.delay || "0ms"};
`;

const Loader = () => (
  <Container>
    <Bars>
      <Bar delay="250ms" />
      <Bar delay="150ms" />
      <Bar delay="50ms" />
      <Bar delay="150ms" />
      <Bar delay="250ms" />
    </Bars>
  </Container>
);

export default Loader;
