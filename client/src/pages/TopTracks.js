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
  border: 2px solid pink;
  display: flex;
  flex-wrap: wrap;
`;

function TopTracks(props) {
  const [topTracks, setTopTracks] = useState(null);
  const [term, setTerm] = useState("long_term");

  useEffect(() => {
    getTopTracksData();
  }, []);

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

  return (
    <Main>
      <Section>
        <HeaderA>
          <h1 style={{ margin: "5px 0 5px 0" }}>Top Tracks</h1>
          <Range />
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
