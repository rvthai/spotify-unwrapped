import React, { useEffect, useState } from "react";

// Styles
import styled from "styled-components";
import { Text } from "styles";
import { theme, mixins } from "styles";

const { color } = theme;

const Container = styled.div`
  margin: 0.5em 0;
`;

const Bar = styled.div`
  width: ${(props) => props.width}%;
  height: 25px;
  background-color: ${theme.color.green};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  margin-right: 1em;
`;

const Label = styled.p`
  ${mixins.ellipsis}
  color: ${color.white};
  text-align: left;
`;

const Stats = styled.div`
  ${mixins.flexRow}
  ${mixins.flexAlignCenter}
`;

function Genre(props) {
  const { name, width, percentage } = props;

  return (
    <Container>
      <Label>{name}</Label>
      <Stats>
        <Bar width={width}></Bar>
        {/* <Text>{percentage}%</Text> */}
      </Stats>
    </Container>
  );
}

export default Genre;
