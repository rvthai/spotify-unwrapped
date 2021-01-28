import React from "react";
import styled from "styled-components";

// Components
import Trend from "components/Trend";

// Styles
import { Section, Header } from "styles";
import { mixins } from "styles";

const Content = styled.div`
  ${mixins.flexRow}
  ${mixins.flexWrap};
  margin: 1em 0;
  width: 100%;
`;

const FlexGap = styled.div`
  margin: 0.5em;
`;

function TrendsPreview(props) {
  const { artist, track } = props;

  return (
    <Section>
      <Header>
        <h3>Your Latest Listening Trends</h3>
      </Header>
      <Content>
        <Trend
          category="ARTIST"
          name={artist.name}
          image={artist.images[0].url}
        />
        <FlexGap />
        <Trend
          category="TRACK"
          name={track.name}
          image={track.album.images[0].url}
        />
      </Content>
    </Section>
  );
}

export default TrendsPreview;
