import React from "react";

import TopArtist from "components/TopArtist";
import TopTrack from "components/TopTrack";

import { Section } from "styles";

function Trends(props) {
  return (
    <Section>
      <h2
        style={{ textAlign: "left", marginBottom: "0.5em", fontSize: "16px" }}
      >
        Your Latest Listening Trends
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          alignItems: "stretch",
          // border: "1px solid pink",
        }}
      >
        <TopArtist artist={props.artist} />
        <TopTrack track={props.track} />
      </div>
    </Section>
  );
}

export default Trends;
