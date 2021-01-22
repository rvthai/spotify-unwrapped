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
  z-index: -1;
  top: 15%;
  left: 8%;
  width: 600px;
  height: 200px;
  /*box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);*/
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const Category = styled.p`
  color: white;
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  /*box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);*/
`;

// const Name = styled(ReactFitText)`
//   font-weight: 900;
//   color: white;
//   border: solid 2px green;
// `;

const PlayNow = styled.p`
  font-size: 14px;
  color: ${color.green};
  letter-spacing: 2px;
  margin: 1em;
`;
function TopArtist(props) {
  const { artist } = props;

  const image = artist.images[0].url;
  const name = artist.name;

  return (
    <div style={{ position: "relative", marginRight: "3em" }}>
      <Glass>
        <div
          style={{
            margin: "1em",
            display: "flex",
            flexDirection: "column",
            width: "275px",
          }}
        >
          <Category>Top Artist</Category>
          <div
            style={{
              width: "275px",
              height: "100px",
              border: "solid 1px pink",
            }}
          >
            {/* <ScaleText>
              <p>Mac Miller</p>
            </ScaleText> */}
          </div>
          <PlayNow>PLAY NOW</PlayNow>
        </div>
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
