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
  margin: 1em 0;
`;

const TrackImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

const TrackNumber = styled.p`
  margin: 0 2em 0 1em;
`;

const TrackInfo = styled.div`
  ${mixins.flexRow}
  ${mixins.flexSpaceBetween}
  ${mixins.flexAlignCenter}
  width: 100%;
`;

const TrackLabel = styled.div`
  ${mixins.flexColumn};
  ${mixins.flexAlignStart};
  ${mixins.flexJustifyCenter};
`;
const TrackName = styled.p`
  ${mixins.ellipsis}
  color: ${color.white};
  font-weight: 500;
`;
const TrackArtist = styled.p`
  ${mixins.ellipsis}
`;

function TopTracksPreview(props) {
  console.log(props.data);

  const time = (ms) => {
    const min = Math.floor((ms / 1000 / 60) << 0);
    const sec = Math.floor((ms / 1000) % 60);

    let connector = ":";
    if (sec < 10) {
      connector += "0";
    }

    return min + connector + sec;
  };

  const getArtists = (artists) => {
    let l = [];

    for (let i = 0; i < artists.length; i++) {
      l.push(artists[i].name);
    }

    return l.join(", ");
  };

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
            <TrackNumber>{index + 1}</TrackNumber>
            <TrackInfo>
              <TrackLabel>
                <TrackName>{track.name}</TrackName>
                <TrackArtist>{getArtists(track.artists)}</TrackArtist>
              </TrackLabel>
              <p>{time(track.duration_ms)}</p>
            </TrackInfo>
          </Track>
        ))}
      </Content>
    </Section>
  );
}

export default TopTracksPreview;
