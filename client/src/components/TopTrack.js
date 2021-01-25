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
  /*border-radius: 5px;*/
`;
const Image = styled.img`
  width: 150px;
  display: block;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
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
  margin-bottom: 0.5em;
`;

const Name = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${color.white};
  width: calc(350px - 1.25em);

  ${(props) =>
    props.one
      ? `
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  `
      : `display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow:hidden;`}
`;

const PlayButton = styled(Button)`
  color: ${color.white};
  background: ${color.green};

  &:hover {
    background: ${color.lightGreen};
    transform: scale(1.05);
  }

  &:active,
  &:focus {
    background-color: ${color.darkGreen};
    color: #e6e6e6;
    transform: scale(1);
  }
`;

const SeeMoreButton = styled(Button)`
  color: ${color.white};
  background: transparent;
  border: 1px solid ${color.lightGray};
  margin-left: 1.25em;

  &:hover {
    border: 1px solid ${color.white};
    transform: scale(1.05);
  }

  &:active,
  &:focus {
    border: 1px solid ${color.gray};
    color: ${color.lightGray};
    transform: scale(1);
  }
`;

function TopTrack(props) {
  const { track } = props;

  const image = track.album.images[0].url;
  const name = track.name;
  const [X, setX] = useState();

  useEffect(() => {
    const el = document.getElementById("el");
    const lines = Math.round(el.offsetHeight / 28.8);

    if (lines === 1) {
      console.log("truuuuu");
      setX(true);
    } else {
      setX(false);
    }
  }, []);

  return (
    <div style={{ margin: "1em" }}>
      <Container>
        <ImageWrapper>
          <Image src={image} alt="artist" />
        </ImageWrapper>
        <TextWrapper>
          <Text>
            <Label>Top Track</Label>
            <Name id="el" one={X}>
              idontwannabeyouanymore
            </Name>
            {/* <Label>12312421 Followers</Label> */}
          </Text>
          <div style={{ display: "flex" }}>
            <PlayButton>PLAY</PlayButton>
            <SeeMoreButton>SHARE</SeeMoreButton>
          </div>
        </TextWrapper>
      </Container>
    </div>
  );
}

export default TopTrack;
