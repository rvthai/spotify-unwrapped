import React, { useEffect } from "react";
import styled from "styled-components";
import { theme, media } from "styles";

const { color } = theme;

const Container = styled.div`
  position: relative;
`;

const Glass = styled.div`
  position: absolute;
  z-index: 2;
  top: 25%;
  left: -125%;
  width: 550px;
  /*box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);*/
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Image = styled.img`
  width: 250px;
  overflow: hidden;
  display: block;
  position: relative;
  border-radius: 5px;
`;

const Category = styled.p`
  color: white;
  margin-bottom: 1em;
`;

const Text = styled.div`
  width: 55%;
  overflow: hidden;
  background: ${color.slateGray};
  padding: 0.5em 1em;
  border-radius: 5px;
`;

const Name = styled.h1`
  font-size: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  /*box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);*/
  border-radius: 5px;
  overflow: hidden;
`;

const PlayNow = styled.p`
  font-size: 14px;
  color: ${color.green};
  letter-spacing: 2px;
  margin-top: 1em;
`;
function TopArtist(props) {
  const { artist } = props;

  const image = artist.images[0].url;
  const name = artist.name;

  return (
    <Container>
      <Glass>
        <Category>Top Artist</Category>
        <Text>
          <Name>{name}</Name>
        </Text>
        <PlayNow>PLAY NOW</PlayNow>
      </Glass>

      <ImageWrapper>
        <Image src={image} alt="artist-avatar" />
      </ImageWrapper>
    </Container>
  );
}

export default TopArtist;
