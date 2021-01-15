import React from "react";
import { Card } from "styles";

function TopArtistsPreview(props) {
  // return (
  //   <div>
  //     Top Artists of All Time
  //     <div style={{ display: "flex", flexWrap: "wrap" }}>
  //       {props.data.map((artist, index) => (
  //         <div
  //           key={index}
  //           style={{
  //             display: "flex",
  //             flexDirection: "column",
  //             alignItems: "center",
  //             margin: "1rem",
  //           }}
  //         >
  //           <img
  //             style={{
  //               width: "100px",
  //               height: "100px",
  //               borderRadius: "50%",
  //             }}
  //             src={artist.images[2].url}
  //             alt="artist-profile-pic"
  //           />
  //           <p>{artist.name}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
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

export default TopArtistsPreview;
