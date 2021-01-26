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

const TopTracksPreview = (props) => (
  <Section>
    <PreviewHeader>
      <h3 style={{ margin: "10px 0 10px 0" }}>Top Tracks of All Time</h3>
      <Link style={{ textDecoration: "none" }} to="/top-tracks">
        <p>SEE MORE</p>
      </Link>
    </PreviewHeader>
    <div style={{ width: "100%" }}>
      {props.data.map((track, index) => (
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
            }}
            src={track.album.images[2].url}
            alt="album-cover"
          />
          <p style={{ margin: "0 1em 0 1em" }}>{index + 1}</p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <p style={{ marginLeft: "1em", color: "white", fontWeight: 500 }}>
                {track.name}
              </p>
              <p style={{ marginLeft: "1em" }}>{track.artists[0].name}</p>
            </div>
            <p>4:07</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default TopTracksPreview;
