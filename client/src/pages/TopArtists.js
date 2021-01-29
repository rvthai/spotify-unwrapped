import React, { useEffect, useState } from "react";
import styled from "styled-components";

// API
import { getTopArtists } from "utils";

// Components
import Range from "components/Range";

// Styles
import { Main, Section, Header } from "styles";

const HeaderA = styled(Header)`
  border: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  margin-top: 1em;
  row-gap: 2em;
`;

const Title = styled.h1`
  margin: 0;
`;

function TopArtists() {
  const [topArtists, setTopArtists] = useState(null);
  const [timeRange, setTimeRange] = useState("long_term");

  useEffect(() => {
    getData();
  }, [timeRange]);

  const getData = async () => {
    const response = await getTopArtists({ time_range: timeRange, limit: 50 });
    setTopArtists(response.data.items);
  };

  const handleClick = (event) => {
    setTimeRange(event.target.id);
  };

  return (
    <Main>
      <Section>
        <HeaderA>
          <Title>Top Artists</Title>
          <Range />
        </HeaderA>

        <Content>
          {topArtists
            ? topArtists.map((artist, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    //border: "1px solid pink",
                  }}
                >
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                    }}
                    src={artist.images[0].url}
                    alt="artist-profile-pic"
                  />
                  <p>{artist.name}</p>
                </div>
              ))
            : null}
        </Content>
      </Section>
    </Main>
  );
}

export default TopArtists;
