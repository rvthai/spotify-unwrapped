import React from "react";
import styled from "styled-components";

// Components
import Trend from "components/Trend";

// Styles
import { Section, Header } from "styles";
import { mixins } from "styles";

const Content = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexCenter};
  ${mixins.flexWrap};
  widthL 100%;
`;

const TrendsSection = styled(Section)`
  width: 60%;
`;

function TrendsPreview(props) {
  const { artist, track } = props;

  return (
    <TrendsSection>
      <Header>
        <h3>Your Latest Listening Trends</h3>
      </Header>
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
    </TrendsSection>
  );
}

export default TrendsPreview;
