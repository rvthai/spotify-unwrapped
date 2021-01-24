import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "styles";
import { theme } from "styles";

const { color } = theme;

const Container = styled.div`
  display: flex;
  width: 500px;
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 5px;
`;
const Image = styled.img`
  width: 150px;
  display: block;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-left: 1.25em;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  font-size: 12px;
  letter-spacing: 2px;
  color: ${color.lightGray};
`;

const Name = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${color.white};
`;

// const Background = styled.div`
//   position: absolute;
//   background: ${color.slateGray};
//   width: 600px;
//   height: 200px;
//   left: -120%;
//   top: 11%;
//   z-index: -1;
// `;

const PlayButton = styled(Button)`
  color: ${color.white};
  background: ${color.green};
  width: 150px;

  &:hover {
    background: ${color.lightGreen}
    transform: scale(1.05);
  }

  &:active,
  &:focus {
    background-color: ${color.darkGreen};
    color: ${color.lightGray};
    transform: scale(1);
  }
`;

function TopArtist2(props) {
  const { artist } = props;

  const image = artist.images[0].url;
  const name = artist.name;

  return (
    <Container>
      <ImageWrapper>
        <Image src={image} alt="artist" />
      </ImageWrapper>
      <TextWrapper>
        <Text>
          <Label>TOP ARTIST</Label>
          <Name>{name}</Name>
        </Text>
        <PlayButton>PLAY NOW</PlayButton>
      </TextWrapper>
    </Container>
  );
}

export default TopArtist2;
