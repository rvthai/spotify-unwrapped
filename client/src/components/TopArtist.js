import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
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
  width: 600px;
  height: 200px;
  left: -120%;
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
  margin: 1em;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.clamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
  /*word-break: ${(props) => props.break || "default"};*/
  /*hyphens: ${(props) => props.break || "none"};*/
  hyphens: auto;
`;
const PlayButton = styled.p`
  letter-spacing: 2px;
  color: ${color.green};
  margin: 1em;
  cursor: pointer;
`;

function TopArtist(props) {
  const { artist } = props;

  const image = artist.images[0].url;
  const name = artist.name;

  const [X, setX] = useState();
  const [Y, setY] = useState();

  // console.log(
  //   window.getComputedStyle(test, null).getPropertyValue("line-height")
  // );
  useEffect(() => {
    const el = document.getElementById("el");
    const lines = Math.round(el.offsetHeight / 28.8);
    console.log("# of lines in name:", lines);

    if (lines > 3) {
      setX(3);
      // setY("none");
    } else if (lines === 1) {
      setY("auto");
    } else {
      // setY("none");
      setX(lines);
    }
  }, []);

  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Background>
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "280px",
              height: "100%",
              //border: "solid 1px pink",
            }}
          >
            <Label>Top Artist</Label>
            {/* <Name clamp={X} break={Y} id="el">
              ALl I want for christmas is you (feat justin beiber
              bab)asjdfklajsdklfjaklsdjf;lksadasdjflksadjfklasjdkfjklsda;jfkl;adsj;kfl
            </Name> */}
            {/* <Name clamp={X} break={Y} id="el">
              idontwannabeyouanymore
            </Name> */}
            <Name clamp={X} break={Y} id="el">
              i idontwannabeyouanymore b
            </Name>
            <PlayButton>PLAY NOW</PlayButton>
          </div>
        </Background>
        <div style={{ display: "flex" }}>
          <ImageWrapper>
            <Image src={image} alt="artist" />
          </ImageWrapper>
        </div>
      </div>
    </Container>
  );
}

export default TopArtist;
