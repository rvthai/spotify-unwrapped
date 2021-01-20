import React from "react";

import styled from "styled-components";
import { theme } from "styles";

const { color } = theme;

const Container = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  display: block;
  position: relative;

  /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); */
`;

const Label = styled.h3`
  padding: 1em 2em;
  width: 275px;
  background: ${color.green};
  position: absolute;
  top: 30%;
  left: -120%;
`;

const Label2 = styled.h1`
  background: ${color.green};
  text-align: center;
  width: 400px;
  position: absolute;
  top: 90%;
  left: -30%;
  font-size: 50px;
`;

const MiniLabel2 = styled.p`
  color: white;
  position: absolute;
  top: -15%;
  left: 25%;
  background: ${color.lightSlateGray};
  padding: 0.5em 3em;
`;

const MiniLabel = styled.p`
  padding: 0.5em 1em;
  width: 60px;
  text-align: center;
  background: ${color.lightSlateGray};
  position: absolute;
  top: 15%;
  left: -120%;
`;

const Glass = styled.div`
  width: 500px;
  height: 250px;
  position: absolute;
  z-index: -1;
  top: 25px;
  left: -110%;
  background: ${color.slateGray};
`;

const Glass2 = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: -1;
  top: 50px;
  left: -10%;
  background: ${color.slateGray};
`;

function TopArtist(props) {
  const { artist } = props;

  const artistImg = artist.images[0].url;
  const artistName = artist.name;

  return (
    <Container>
      {/* <Glass />
      <Image src={artistImg} alt="artist-avatar" />
      <Label>{artistName}</Label>
      <MiniLabel>Top Artist</MiniLabel> */}
      <Glass2></Glass2>
      <Image src={artistImg} alt="artist-avatar" />
      <Label2>{artistName}</Label2>
      <MiniLabel2>Top Artist</MiniLabel2>
    </Container>
  );
}

export default TopArtist;
