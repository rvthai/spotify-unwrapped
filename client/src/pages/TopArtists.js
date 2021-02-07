import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Main, Section, PageHeader, Grid } from "styles";
import { theme, media } from "styles";
import {
  getTopArtistsLong,
  getTopArtistsMedium,
  getTopArtistsShort,
} from "utils";

// Components
import Loader from "components/Loader";
import Ranges from "components/Ranges";
import Artist from "components/Artist";

const { color, fontSize } = theme;

const Title = styled.h1`
  font-size: ${fontSize.xl};
  margin: 0;

  ${media.tablet`
    margin-bottom: 0.5em;
  `}
`;

function TopArtists() {
  const [isLoading, setIsLoading] = useState(true);
  const [topArtists, setTopArtists] = useState(null);
  const [term, setTerm] = useState("long");

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    try {
      const long = await getTopArtistsLong();
      const medium = await getTopArtistsMedium();
      const short = await getTopArtistsShort();

      const data = {
        long: long.data.items,
        medium: medium.data.items,
        short: short.data.items,
      };

      setTopArtists(data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const onTermChange = (range) => {
    setTerm(range);
  };

  if (isLoading) return <Loader color={color.lightGray} isPage={true} />;

  return (
    <Main>
      <Section>
        <PageHeader>
          <Title>Top Artists</Title>
          <Ranges onTermChange={onTermChange} />
        </PageHeader>

        <Grid>
          {topArtists
            ? topArtists[term].map((artist, index) => (
                <Artist
                  key={index}
                  id={artist.id}
                  name={artist.name}
                  image={artist.images[0] ? artist.images[0].url : null}
                  genres={artist.genres}
                  followers={artist.followers.total}
                />
              ))
            : null}
        </Grid>
      </Section>
    </Main>
  );
}

export default TopArtists;
