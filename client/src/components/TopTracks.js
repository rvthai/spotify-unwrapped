import React, { useState } from "react";
import { playTrack } from "utils";
import { Section, Header, MoreLink } from "styles";

// Components
import Track from "components/Track";

function TopTracks(props) {
  const { data } = props;
  const [activeTrack, setActiveTrack] = useState(null);

  const onActiveTrackChange = (previewURL) => {
    const track = playTrack({ url: previewURL, track: activeTrack });
    setActiveTrack(track);
  };

  return (
    <Section>
      <Header>
        <h3>Top Tracks of All Time</h3>
        <MoreLink to="/top-tracks">SEE MORE</MoreLink>
      </Header>

      {data.map((track, index) => (
        <Track
          key={index}
          rank={index + 1}
          image={track.album.images[2] ? track.album.images[2].url : null}
          name={track.name}
          artists={track.artists}
          duration={track.duration_ms}
          preview={track.preview_url}
          activeTrack={activeTrack ? activeTrack.src : null}
          onActiveTrackChange={onActiveTrackChange}
        />
      ))}
    </Section>
  );
}

export default TopTracks;
