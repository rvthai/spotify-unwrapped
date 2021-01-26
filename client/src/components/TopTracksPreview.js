import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Section, Header, MoreLink, Image } from "styles";
import { theme, mixins } from "styles";

const { color } = theme;

const Content = styled.div`
  width: 100%;
`;

const Track = styled.div`
  ${mixins.flexRow}
  ${mixins.flexAlignCenter}
`;

const TrackName = styled.p`
  ${mixins.ellipsis}
  color: ${color.white};
  font-weight: 500;
`;

const TrackArtist = styled.p`
  ${mixins.ellipsis}
`;

const TrackImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

function TopTracksPreview(props) {
  console.log(props.data);
  return (
    <Section>
      <Header>
        <h3>Top Tracks of All Time</h3>
        <MoreLink to="/top-tracks">SEE MORE</MoreLink>
      </Header>

      <Content>
        {props.data.map((track, index) => (
          <Track key={index}>
            <TrackImage src={track.album.images[2].url} alt="track-image" />
            <p style={{ margin: "0 1em 0 1em" }}>{index + 1}</p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <TrackName>{track.name}</TrackName>
                <TrackArtist>{track.artists[0].name}</TrackArtist>
              </div>
              <p>{track.duration_ms}</p>
            </div>
          </Track>
        ))}
      </Content>
    </Section>
  );
}

export default TopTracksPreview;
