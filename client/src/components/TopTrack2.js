import React from "react";
import styled from "styled-components";
import { theme } from "styles";

const { color } = theme;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 10em;
  text-align: center;
`;

const Background = styled.div`
  position: absolute;
  background: ${color.slateGray};
  width: 325px;
  height: 200px;
  left: -15%;
  top: 11%;
  z-index: -1;
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 250px;
  display: block;
`;

const Label = styled.p`
  font-size: 11px;
  letter-spacing: 2px;
  color: ${color.lightGray};
  margin: 0.5em;
`;
const Name = styled.h1`
  font-size: 24px;
  width: 250px;
`;
const PlayButton = styled.p`
  letter-spacing: 2px;
  color: ${color.green};
  margin: 1em;
  cursor: pointer;
`;

function TopTrack2(props) {
  const { track } = props;

  const image = track.album.images[0].url;
  const name = track.name;

  return (
    <Container>
      <Label>Top Track</Label>
      <Name>A super uneccessaryilt long name for a fucking artist</Name>
      <div style={{ position: "relative" }}>
        <Background />
        <ImageWrapper>
          <Image src={image} alt="track" />
        </ImageWrapper>
      </div>
      <PlayButton>PLAY NOW</PlayButton>
    </Container>
  );
}

export default TopTrack2;
