import React from "react";
import { Card } from "styles";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { theme } from "styles";

const { color } = theme;

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  border-bottom: 1px solid ${color.lightGray};
  padding-bottom: 1em;
`;

const TopTracksPreview = (props) => (
  <Card>
    <PreviewHeader>
      <h3>Top Tracks of all Time</h3>
      <Link style={{ textDecoration: "none" }} to="/top-tracks">
        <p>SEE MORE</p>
      </Link>
    </PreviewHeader>
    <div>
      {props.data.map((track, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            margin: "1.5em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            paddingBottom: "1em",
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
              <p style={{ marginLeft: "1em" }}>{track.name}</p>
              <p style={{ marginLeft: "1em" }}>{track.artists[0].name}</p>
            </div>
            <p>4:07</p>
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export default TopTracksPreview;
