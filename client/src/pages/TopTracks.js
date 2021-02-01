import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

// API
import { getTopTracks } from "utils";

// Components
import Track from "components/Track";
import TimeRanges from "components/TimeRanges";

// Styles
import { Main, Section, PageHeader } from "styles";

const Title = styled.h1`
  margin: 0;
`;

const Tracks = styled.div`
  margin-top: 2em;
`;

function TopTracks(props) {
  const [topTracks, setTopTracks] = useState(null);
  const [term, setTerm] = useState("long_term");

  const getTopTracksData = useCallback(async () => {
    try {
      const response = await getTopTracks({
        time_range: term,
        limit: 50,
      });
      setTopTracks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [term]);

  useEffect(() => {
    getTopTracksData();
  }, [getTopTracksData]);

  const onTimeRangeChange = (timeRange) => {
    setTerm(timeRange);
  };

  return (
    <Main>
      <Section>
        <PageHeader>
          <Title>Top Tracks</Title>
          <TimeRanges onTimeRangeChange={onTimeRangeChange} />
        </PageHeader>
        {topTracks ? (
          <Tracks>
            {topTracks.map((track, index) => (
              <Track
                key={index}
                number={index}
                image={track.album.images[2].url}
                name={track.name}
                artists={track.artists}
                time={track.duration_ms}
              />
            ))}
          </Tracks>
        ) : null}
      </Section>
    </Main>
  );
}

export default TopTracks;
