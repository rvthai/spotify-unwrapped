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
  display: flex;
  /*box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  box-shadow: 1px 1px 16px -2px rgba(0, 0, 0, 0.3);*/
`;

const Image = styled.img`
  width: 250px;
  overflow: hidden;
  display: block;
  position: relative;
  border-radius: "15px";
  /*border-top-right-radius: 15px;*/
  /*border-bottom-right-radius: 15px;*/
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  justify-content: space-between;
  margin: 1em;
`;

const Category = styled.p`
  color: white;
  font-size: 12px;
  background: ${color.black};
  padding: 0.5em;
  margin: 0 auto;
  width: 75px;
`;

const Name = styled.h1`
  font-size: 24px;
`;

const PlayNow = styled.p`
  font-size: 14px;
  color: ${color.green};
  letter-spacing: 2px;
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
/* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); */

// const Label2 = styled.h1`;
//   background: ${color.lightSlateGray};
//   width: 400px;
//   text-align: center;
//   position: absolute;
//   left: -30%;
//   font-size: 40px;
//   padding: 0.5em 0;
// `;

// const MiniLabel2 = styled.p`
//   color: white;
//   position: absolute;
//   top: -15%;
//   left: 25%;
//   background: ${color.lightSlateGray};
//   padding: 0.5em 3em;
// `;

function TopArtist(props) {
  const { artist } = props;

  const image = artist.images[0].url;
  const name = artist.name;

  return (
    <div style={{ position: "relative", marginRight: "3em" }}>
      <Glass>
        <Text>
          <Category>Top Artist</Category>
          {/* <Name>
              First Time (feat. Dylan Matthew) by Seven Lions, SLANDER & Dabin
              feat. Dylan Matthew
            </Name> */}
          <Name>{name}</Name>
          <PlayNow>PLAY NOW</PlayNow>
        </Text>
      </Glass>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            padding: "1em",
            alignItems: "center",
          }}
        ></div>
        <ImageWrapper>
          <Image src={image} alt="artist-avatar" />
        </ImageWrapper>
      </Container>
    </div>
  );
}

export default TopArtist;
