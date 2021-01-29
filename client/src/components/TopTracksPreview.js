import React from "react";
import styled from "styled-components";

// Components
import Track from "components/Track";

// Styles
import { Section, Header, MoreLink, Image } from "styles";

const Content = styled.div`
  width: 100%;
`;

function TopTracksPreview(props) {
  const { data } = props;

  return (
    <Section>
      <Header>
        <h3>Top Tracks of All Time</h3>
        <MoreLink to="/top-tracks">SEE MORE</MoreLink>
      </Header>

      <Content>
        {data.map((track, index) => (
          <Track
            key={index}
            number={index}
            image={track.album.images[2].url}
            name={track.name}
            artists={track.artists}
            time={track.duration_ms}
          />
        ))}
      </Content>
    </Section>
  );
}

export default TopTracksPreview;
