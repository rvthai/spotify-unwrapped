import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { isSingleLine } from "utils";

// Styles
import { Label, Image, Button } from "styles";
import { theme, mixins, media } from "styles";

const { color } = theme;

const Container = styled.div`
  ${mixins.flexRow}
  align-items: center;
  width: 440px;

  ${media.desktop`
    width: 100%;
  `}
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
      </div>
    </Container>
  );
}

export default Trend;
