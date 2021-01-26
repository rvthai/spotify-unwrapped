import React, { useEffect, useState } from "react";
import { isSingleLine } from "utils";

import styled from "styled-components";
import { Label, Image, Button } from "styles";
import { theme, mixins, media } from "styles";

const { color } = theme;

const Container = styled.div`
  ${mixins.flexRow}
  align-items: center;
  width: 100%;
  margin: 1em 0;
`;

const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 6px 10px -5px rgba(0, 0, 0, 0.5);

  ${media.tablet`
    width: 100px;
    height: 100px;
  `}
`;

const BigImage = styled(Image)`
  width: 150px;

  ${media.tablet`
    width: 100px;
  `}
`;

const Info = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexSpaceBetween}
  text-align: left;
  margin-left: 1.25em;
`;

const TextWrapper = styled.div`
  ${mixins.flexColumn}
`;

const Name = styled.h1`
  color: ${color.white};
  font-size: 30px;
  overflow: hidden;

  ${(props) =>
    props.singleLine
      ? `
      white-space: nowrap;
      text-overflow: ellipsis;
      `
      : `
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
  `}

  ${media.tablet`
  font-size: 24px;

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
`}
`;

const Buttons = styled.div`
  ${mixins.flexRow}

  ${media.tablet`
    display: none;
  `}
`;

const PrimaryButton = styled(Button)`
  color: ${color.white};
  background: ${color.green};

  ${media.tablet`
    margin-top: 1em;
  `}

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

  ${media.tablet`
    display: none;
  `}

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
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Info>
          <TextWrapper>
            <Label>TOP {category}</Label>
            <div
              style={{ display: "table", tableLayout: "fixed", width: "100%" }}
            >
              <Name id="name" singleLine={singleLine}>
                {name}
              </Name>
            </div>
          </TextWrapper>
        </Info>
        <Buttons>
          {" "}
          <PrimaryButton>PLAY</PrimaryButton>{" "}
          <SecondaryButton>FOLLOW</SecondaryButton>
        </Buttons>
      </div>
      {/* <Buttons>
          <PrimaryButton>PLAY</PrimaryButton>
          <SecondaryButton>SHARE</SecondaryButton>
        </Buttons>
      <ButtonsMobile>
        <PrimaryButton>PLAY</PrimaryButton>
      </ButtonsMobile> */}
    </Container>
  );
}

export default Trend;
