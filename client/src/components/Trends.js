import React from "react";

import TopArtist from "components/TopArtist";
import TopArtist2 from "components/TopArtist2";
import TopTrack from "components/TopTrack";
import TopTrack2 from "components/TopTrack2";

import { Section } from "styles";

function Trends(props) {
  return (
    <Section>
      <h3 style={{ marginBottom: "1em", fontSize: "24px" }}>
        Your latest listening trends
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <TopArtist2 artist={props.artist} />
        <TopTrack2 track={props.track} />
        {/* <TopTrack track={props.track} /> */}
      </div>
    </Section>
  );
}

export default Trends;
