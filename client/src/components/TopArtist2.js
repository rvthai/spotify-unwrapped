import React from "react";
import styled from "styled-components";
import { theme } from "styles";

const { color } = theme;

const Container = styled.div`
  margin: 2em 4em;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  overflow: hidden;
  display: block;
  position: relative;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1em;
`;

const FirstHalf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.p`
  color: white;
`;

const Name = styled.h1`
  font-size: 24px;
  text-align: left;
`;

const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
`;

const Background = styled.div`
  width: 150px;
  height: 150px;
  background: ${color.lightSlateGray};
  position: absolute;
  top: 10%;
  left: -10%;
  z-index: -1;
`;

const PlayNow = styled.p`
  font-size: 14px;
  color: ${color.green};
  letter-spacing: 2px;
`;
function TopArtist2(props) {
  const { artist } = props;

  const image = artist.images[0].url;
  const name = artist.name;

  return (
    <Container>
      <ImageWrapper>
        <Image src={image} alt="artist-avatar" />
        <Background />
      </ImageWrapper>
      <RightSide>
        <FirstHalf>
          <Label>Top Artist</Label>
          <Name>Panic At The Disco!</Name>
        </FirstHalf>
        <PlayNow>PLAY NOW</PlayNow>
      </RightSide>
    </Container>
  );
}

export default TopArtist2;
