import React from "react";
import styled from "styled-components";
import { theme } from "styles";

const { color } = theme;

const Container = styled.div`
  margin: 2em 4em;
  display: flex;
  width: 500px;
  height: 200px;
  border: 2px solid green;
`;

const Image = styled.img`
  width: 200px;
  display: block;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 2px solid pink;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1em;
  border: 1px solid orange;
`;

const FirstHalf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.p`
  font-size: 11px;
  letter-spacing: 2px;
`;

const Name = styled.h1`
  font-size: 24px;
  text-align: left;
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
function TopTrack2(props) {
  const { track } = props;

  const image = track.album.images[0].url;
  const name = track.name;

  return (
    <Container>
      <ImageWrapper>
        <Image src={image} alt="artist-avatar" />
        {/* <Background /> */}
      </ImageWrapper>
      <RightSide>
        {/* <FirstHalf>
          <Label>TOP TRACK</Label>
          <Name>{name}</Name>
        </FirstHalf> */}
        {/* <PlayNow>PLAY NOW</PlayNow> */}
      </RightSide>
    </Container>
  );
}

export default TopTrack2;
