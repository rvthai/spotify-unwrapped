import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Section } from "styles";
import { theme } from "styles";

const { color } = theme;

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${color.darkGray};
  width: 100%;
`;

function TopArtistsPreview(props) {
  return (
    <Section>
      <PreviewHeader>
        <h3 style={{ margin: "10px 0 10px 0" }}>Top Artists of All Time</h3>
        <Link style={{ textDecoration: "none" }} to="/top-tracks">
          <p>SEE MORE</p>
        </Link>
      </PreviewHeader>
      <div style={{ width: "100%" }}>
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
      </div>
    </Section>
  );
}

export default TopArtistsPreview;
