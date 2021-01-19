import React from "react";
import styled from "styled-components";

import { Card } from "styles";

const MiniCard = styled(Card)`
  width: 555px;
  height: 150px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentTopTrack = (props) => (
  <MiniCard>
    <h3>Your Current Top Track</h3>
    <Content>
      <Category>
        <h3>{props.track.name}</h3>
        <img
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "5px",
          }}
          src={props.track.album.images[0].url}
          alt="album-cover"
        />
      </Category>
    </Content>
  </MiniCard>
);

export default CurrentTopTrack;
