import React from "react";

import TopArtist from "components/TopArtist";
import TopTrack from "components/TopTrack";

import { Section } from "styles";

function Trends(props) {
  return (
    <Section>
      <h3 style={{ marginBottom: "1em", fontSize: "24px" }}>
        Your latest listening trends
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <TopArtist artist={props.artist} />
        {/* <TopTrack track={props.track} /> */}
      </div>
    </Section>
  );
}

export default Trends;
