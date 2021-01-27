import React from "react";

// Components
import Artist from "components/Artist";

import styled from "styled-components";
import { Section, Header, MoreLink } from "styles";

const Content = styled.div`
  width: 100%;
`;

function TopArtistsPreview(props) {
  console.log(props.data);
  return (
    <Section>
      <Header>
        <h3>Top Artists of All Time</h3>
        <MoreLink to="/top-artists">SEE MORE</MoreLink>
      </Header>

      <Content>
        {props.data.map((artist, index) => (
          <Artist
            key={index}
            number={index}
            image={artist.images[2].url}
            name={artist.name}
            followers={artist.followers.total}
          />
        ))}
      </Content>
    </Section>
  );
}

export default TopArtistsPreview;
