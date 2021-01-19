import React from "react";
import { Card } from "styles";
import { Link } from "react-router-dom";

import styled from "styled-components";

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
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
          }}
        >
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "5px",
            }}
            src={track.album.images[2].url}
            alt="album-cover"
          />
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
        </div>
      ))}
    </div>
  </Card>
);

export default TopTracksPreview;
