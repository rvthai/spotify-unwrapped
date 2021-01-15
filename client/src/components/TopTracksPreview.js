import React from "react";
import { Card } from "styles";

function TopTracksPreview(props) {
  return (
    <Card>
      Top Tracks of All Time
      <div>
        {props.data.map((track, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              margin: "1rem",
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
