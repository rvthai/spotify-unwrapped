import React from "react";

import styled from "styled-components";
import { theme, media } from "styles";

const { color } = theme;

const Container = styled.div`
  margin: 1em;
  position: relative;
  /*background: ${color.slateGray};*/
  width: 600px;
  height: 250px;
  /*border-radius: 15px;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);*/
  position: relative;
  overflow: hidden;
`;

const Glass = styled.div`
  position: absolute;
  background: ${color.slateGray};
  width: 600px;
  height: 200px;
  z-index: -1;
  top: 15%;
  left: 8%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Image = styled.img`
  width: 250px;
  overflow: hidden;
  display: block;
  position: relative;
  border-radius: "15px";
  /*border-top-right-radius: 15px;*/
  /*border-bottom-right-radius: 15px;*/
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  transition: all 0.3s;
`;

const Category = styled.p`
  color: white;
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: ${color.green};

  &:hover {
    background: transparent;
    img {
      filter: none;
      mix-blend-mode: normal;
    }
  }
`;

const Name = styled.h1``;

function TopTrack(props) {
  const { track } = props;

  const trackImg = track.album.images[0].url;
  const trackName = track.name;

  return (
    <div style={{ position: "relative", marginRight: "3em" }}>
      <Glass />
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            padding: "1em",
            alignItems: "center",
          }}
        >
          <Category>Top Track</Category>
          <Name>{trackName}</Name>
          PLAY NOW
        </div>
        <ImageWrapper>
          <Image src={trackImg} alt="artist-avatar" />
        </ImageWrapper>
      </Container>{" "}
    </div>
  );
}

export default TopTrack;
