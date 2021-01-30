import React, { useEffect, useState } from "react";
import styled from "styled-components";

// API
import { getTopTracks } from "utils";

// Components
import Track from "components/Track";
import Range from "components/Range";

// Styles
import { Main, Section, Header } from "styles";

const Content = styled.div``;

const HeaderA = styled(Header)`
  border: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
`;

const Title = styled.h1`
  margin: 0;
`;

function TopTracks(props) {
  const [topTracks, setTopTracks] = useState(null);
  const [term, setTerm] = useState("long_term");

  useEffect(() => {
    getTopTracksData();
  }, [term]);

  const getTopTracksData = async () => {
    try {
      const response = await getTopTracks({
        time_range: term,
        limit: 50,
      });
      setTopTracks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const onTermChange = (t) => {
    setTerm(t);
  };

  return (
    <Main>
      <Section>
        <HeaderA>
          <Title>Top Tracks</Title>
          <Range onTermChange={onTermChange} />
        </HeaderA>
        {topTracks ? (
          <div>
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
          </div>
        ) : null}{" "}
      </Section>
    </Main>
  );
}

export default TopTracks;
