import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getTopTracksLong, getTopTracksMedium, getTopTracksShort } from "utils";
import { Main, Section, PageHeader } from "styles";
import { theme, media } from "styles";

// Components
import Track from "components/Track";
import Ranges from "components/Ranges";
import Loader from "components/Loader";

const { color, fontSize } = theme;

const Title = styled.h1`
  font-size: ${fontSize.xl};
  margin: 0;

  ${media.tablet`
    margin-bottom: 0.5em;
  `}
`;

const Tracks = styled.div`
  margin-top: 2em;
`;

function TopTracks() {
  const [isLoading, setIsLoading] = useState(true);
  const [topTracks, setTopTracks] = useState(null);
  const [activeTrack, setActiveTrack] = useState(null);
  const [term, setTerm] = useState("long");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const long = await getTopTracksLong();
      const medium = await getTopTracksMedium();
      const short = await getTopTracksShort();

      const data = {
        long: long.data.items,
        medium: medium.data.items,
        short: short.data.items,
      };

      setTopTracks(data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const onTermChange = (range) => {
    setTerm(range);
  };

  const onActiveTrackChange = (previewURL) => {
    const audio = new Audio(previewURL);
    audio.volume = 0.2;
    audio.onended = () => setActiveTrack(null);

    if (!activeTrack) {
      // Play
      audio.play();
      setActiveTrack(audio);
    } else if (previewURL === activeTrack.src) {
      // Stop
      activeTrack.pause();
      activeTrack.currentTime = 0;
      setActiveTrack(null);
    } else {
      // Play New Track
      activeTrack.pause();
      activeTrack.currentTime = 0;
      audio.play();
      setActiveTrack(audio);
    }
  };

  if (isLoading) return <Loader color={color.lightGray} isPage={true} />;

  return (
    <Main>
      <Section>
        <PageHeader>
          <Title>Top Tracks</Title>
          <Ranges onTermChange={onTermChange} />
        </PageHeader>
        {topTracks ? (
          <Tracks>
            {topTracks[term].map((track, index) => (
              <Track
                key={index}
                rank={index + 1}
                image={track.album.images[2].url}
                name={track.name}
                artists={track.artists}
                duration={track.duration_ms}
                preview={track.preview_url}
                activeTrack={activeTrack ? activeTrack.src : null}
                onActiveTrackChange={onActiveTrackChange}
              />
            ))}
          </Tracks>
        ) : null}
      </Section>
    </Main>
  );
}

export default TopTracks;
