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

function TopArtistsPreview(props) {
  return (
    <Card>
      <PreviewHeader>
        <h3>Top Artists of All Time</h3>
        <Link style={{ textDecoration: "none" }} to="/top-artists">
          <p>SEE MORE</p>
        </Link>
      </PreviewHeader>
      <div>
        {props.data.map((artist, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              margin: "1.5em",
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
    </Card>
  );
}

export default TopArtistsPreview;
