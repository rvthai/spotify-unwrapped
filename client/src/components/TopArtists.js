import React from "react";
import styled from "styled-components";
import { Section, Header, MoreLink } from "styles";

// Components
import Artist from "components/Artist";

const Artists = styled.div`
  width: 100%;
`;

function TopArtists(props) {
  return (
    <Section>
      <Header>
        <h3>Top Artists of All Time</h3>
        <MoreLink to="/top-artists">SEE MORE</MoreLink>
      </Header>

      <Artists>
        {props.data.map((artist, index) => (
          <Artist
            key={index}
            rank={index + 1}
            id={artist.id}
            name={artist.name}
            image={artist.images[0] ? artist.images[0].url : null}
            genres={artist.genres}
            followers={artist.followers.total}
            preview={1}
          />
        ))}
      </Artists>
    </Section>
  );
}

export default TopArtists;
