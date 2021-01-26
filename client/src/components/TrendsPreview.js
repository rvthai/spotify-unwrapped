import React from "react";
import styled from "styled-components";

// Components
import Trend from "components/Trend";

// Styles
import { Section } from "styles";
import { theme, mixins } from "styles";

const { color } = theme;

const Content = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexCenter};
  ${mixins.flexWrap};
  widthL 100%;
`;

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${color.darkGray};
  width: 100%;
`;

function TrendsPreview(props) {
  const { artist, track } = props;

  return (
    <Section>
      <PreviewHeader>
        <h3 style={{ margin: "10px 0 10px 0" }}>
          Your Latest Listening Trends
        </h3>
      </PreviewHeader>
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
