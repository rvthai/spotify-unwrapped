import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Section, Header, MoreLink } from "styles";
import { theme } from "styles";

const { color } = theme;

const Content = styled.div`
  width: 100%;
`;

function TopArtistsPreview(props) {
  return (
    <Section>
      <Header>
        <h3>Top Tracks of All Time</h3>
        <MoreLink to="/top-tracks">SEE MORE</MoreLink>
      </Header>
      <Content>
        {props.data.map((artist, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              margin: "1em 0",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "1em",
              }}
              src={artist.images[2].url}
              alt="artist-profile-pic"
            />
            <p style={{ margin: "0 2em 0 0.5em" }}>{index + 1}</p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>{artist.name}</p>
              <p>4,545,245</p>
            </div>
          </div>
        ))}
      </Content>
    </Section>
  );
}

export default TopArtistsPreview;
