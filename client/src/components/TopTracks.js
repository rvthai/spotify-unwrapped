import React, { useEffect, useState } from "react";
import { playTrack } from "utils";
import { Section, Header, MoreLink } from "styles";

// Components
import Track from "components/Track";

function TopTracks(props) {
  const { data } = props;
  const [activeTrack, setActiveTrack] = useState(null);

  useEffect(() => {
    let audio = activeTrack;

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [activeTrack]);

  const onActiveTrackChange = (audio, preview) => {
    audio.current.src = preview;
    const track = playTrack({ audio: audio.current, track: activeTrack });
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
