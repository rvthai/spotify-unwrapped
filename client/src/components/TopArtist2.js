import React from "react";
import styled from "styled-components";
import { theme } from "styles";

const { color } = theme;

const Container = styled.div`
  display: flex;
  border: 1px solid pink;
  width: 500px;
  height: 200px;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 1px solid red;
`;

const Image = styled.img`
  display: block;
  width: 200px;
`;

const InfoWrapper = styled.div`
  padding: 1em;
  text-align: left;
  border: 1px solid blue;
`;

const Label = styled.p`
  letter-spacing: 2px;
`;

const Content = styled.h1`
  font-size: 24px;
  color: ${color.white};
`;

function TopArtist2(props) {
  const { artist } = props;

  const image = artist.images[0].url;
  const name = artist.name;

  return (
    <Container>
      <ImageWrapper>
        <Image src={image} alt="artist-avatar" />
      </ImageWrapper>
      <InfoWrapper>
        <Label>TOP ARTIST</Label>
        <Content>Super duper long artist name will it fit?</Content>
      </InfoWrapper>
    </Container>
  );
}

export default TopArtist2;
