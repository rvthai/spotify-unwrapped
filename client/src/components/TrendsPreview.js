import React from "react";
import styled from "styled-components";

// Components
import Trend from "components/Trend";

// Styles
import { Section } from "styles";
import { mixins } from "styles";

const Content = styled.div`
  ${mixins.flexCenter};
  ${mixins.flexWrap};
  width: 100%;
`;

function TrendsPreview(props) {
  const { artist, track } = props;

  return (
    <Section>
      <h3>Your Latest Listening Trends</h3>
      <Content>
        <Trend
          category="ARTIST"
          name={artist.name}
          image={artist.images[0].url}
        />
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
