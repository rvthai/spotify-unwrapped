import React from "react";

import TopArtist from "components/TopArtist";

import { Section } from "styles";

function Trends(props) {
  return (
    <Section>
      <h3 style={{ marginBottom: "3em" }}>Your latest listening trends</h3>
      <div style={{ display: "flex" }}>
        <TopArtist artist={props.artist} />
      </div>
    </Section>
  );
}

export default Trends;
