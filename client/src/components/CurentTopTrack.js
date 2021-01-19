import React from "react";
import styled from "styled-components";

import { Card } from "styles";

const MiniCard = styled(Card)`
  width: 475px;
  height: 125px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CurrentTopTrack = (props) => (
  <MiniCard>
    <Category>
      <img
        style={{
          width: "125px",
          height: "125px",
          borderRadius: "5px",
        }}
        src={props.track.album.images[0].url}
        alt="album-cover"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: "2em",
        }}
      >
        <p style={{ color: "white", fontSize: "14px" }}>
          Your Current Top Track
        </p>
        <h2 style={{ marginRight: "2em", fontSize: "55px" }}>
          {props.track.name}
        </h2>
        <p>See More</p>
      </div>
    </Category>
  </MiniCard>
);

export default CurrentTopTrack;
