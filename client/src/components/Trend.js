import React, { useEffect, useState } from "react";
import { isSingleLine } from "utils";

import styled from "styled-components";
import { Label, Image, Button } from "styles";
import { theme, mixins, media } from "styles";

const { color } = theme;

const Container = styled.div`
  ${mixins.flexRow}
  width: 500px;
  margin: 1em;

  ${media.tablet`
    ${mixins.flexColumn}
  `}
`;

const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  overflow: hidden;

  ${media.tablet`
    order: 2;
  `}
`;

const BigImage = styled(Image)`
  width: 150px;
`;

const Info = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexSpaceBetween}
  text-align: left;
  margin-left: 1.25em;

  ${media.tablet`
    order: 1;
  `}
`;

const TextWrapper = styled.div`
  ${mixins.flexColumn}
`;

const Name = styled.h1`
  color: ${color.white};
  font-size: 30px;
  width: calc(350px - 1.25em);
  margin: 0;
  overflow: hidden;

  ${(props) =>
    props.singleLine
      ? `
      white-space: nowrap;
      text-overflow: ellipsis;
    `
      : `
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    `}
`;

const Buttons = styled.div`
  ${mixins.flexRow}
`;

const PrimaryButton = styled(Button)`
  color: ${color.white};
  background: ${color.green};

  &:hover {
    background: ${color.lightGreen};
    transform: scale(1.05);
  }

  &:active {
    color: #e6e6e6;
    background: ${color.darkGreen};
    transform: scale(1);
  }
`;

const SecondaryButton = styled(Button)`
  color: ${color.white};
  background: transparent;
  border: 1px solid ${color.lightGray};
  margin-left: 1.25em;

  &:hover {
    border: 1px solid ${color.white};
    transform: scale(1.05);
  }

  &:active {
    color: ${color.lightGray};
    border: 1px solid ${color.gray};
    transform: scale(1);
  }
`;

function Trend(props) {
  const [singleLine, setSingleLine] = useState();

  useEffect(() => {
    const el = document.getElementById("name");
    const result = isSingleLine(el);
    setSingleLine(result);
  }, []);

  const { category, name, image } = props;

  return (
    <Container>
      <ImageWrapper>
        <BigImage src={image} alt="artist" />
      </ImageWrapper>
      <Info>
        <TextWrapper>
          <Label>TOP {category}</Label>
          <Name id="name" singleLine={singleLine}>
            {name}
          </Name>
        </TextWrapper>
        <Buttons>
          <PrimaryButton>PLAY</PrimaryButton>
          <SecondaryButton>SHARE</SecondaryButton>
        </Buttons>
      </Info>
    </Container>
  );
}

export default Trend;
