import React from "react";
import styled, { keyframes } from "styled-components";
import { theme, mixins } from "styles";

const { color, transition } = theme;

const Container = styled.div`
  margin: 0.5em 0;
`;

const GenreName = styled.p`
  ${mixins.ellipsis};
  color: ${color.white};
  text-align: left;
  margin-bottom: 0.15em;
`;

const slide = keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${(props) => props.width}%;;
  }
`;

const Stats = styled.div`
  ${mixins.flexRow}
  ${mixins.flexAlignCenter}
`;

const Bar = styled.div`
  ${mixins.flexRow}
  ${mixins.flexAlignCenter}
  background-color: ${color.green};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-right: 1em;
  animation-name: ${slide};
  animation-delay: 3ms;
  animation-duration: 1s;
  width: ${(props) => props.width}%;
  height: 25px;
  transition: ${transition};

  &:hover {
    background-color: ${color.lightGreen};
  }
`;

function Genre(props) {
  const { genre, width, percentage } = props;

  return (
    <Container key={Math.random()}>
      <GenreName>{genre}</GenreName>
      <Stats>
        <Bar width={width}></Bar>
        <p>{percentage}%</p>
      </Stats>
    </Container>
  );
}

export default Genre;
