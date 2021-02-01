import React, { useEffect, useState } from "react";
import styled from "styled-components";

// API
import { getTopArtists } from "utils";

// Components
import Range from "components/TimeRanges";

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
  row-gap: 2em;
`;

const Title = styled.h1`
  margin: 0;
`;

function TopArtists() {
  const [topArtists, setTopArtists] = useState(null);
  const [term, setTerm] = useState("long_term");

  useEffect(() => {
    getTopArtistsData();
  }, [term]);

  const getTopArtistsData = async () => {
    try {
      const response = await getTopArtists({
        time_range: term,
        limit: 50,
      });
      setTopArtists(response.data.items);
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
          <Title>Top Artists</Title>
          <Range onTermChange={onTermChange} />
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
                  <p style={{ marginTop: "1em" }}>{artist.name}</p>
                </div>
              ))
            : null}
        </Content>
      </Section>
    </Main>
  );
}

export default TopArtists;
