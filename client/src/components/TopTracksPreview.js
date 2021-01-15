import React from "react";
import { Card } from "styles";

import styled from "styled-components";

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function TopTracksPreview(props) {
  return (
    <Card>
      <PreviewHeader>
        <h3>Top Tracks of all Time</h3>
        <p>See more</p>
      </PreviewHeader>
      <div>
        {props.data.map((track, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              margin: "1rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "1em" }}>{index + 1}</p>
            <img
              style={{
                width: "50px",
                height: "50px",
              }}
              src={track.album.images[2].url}
              alt="album-cover"
            />
            <p style={{ marginLeft: "1em", cursor: "pointer" }}>{track.name}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default TopTracksPreview;
