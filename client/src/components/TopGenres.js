import React, { useState, useEffect } from "react";
import { getTopGenresLong } from "utils";
import styled from "styled-components";
import { Section, Header, MoreLink } from "styles";
import { theme, mixins, media } from "styles";

// Components
import Genre from "components/Genre";

const { color } = theme;

const Genres = styled.div`
  ${mixins.flexColumn}
  width: 100%;
`;

const Axis = styled.div`
  background-color: ${color.gray};
  margin-top: 1em;
  width: 100%;
  height: 1px;
`;

const Coords = styled.div`
  ${mixins.flexRow}
  ${mixins.flexSpaceBetween}
  width: 100%;
`;

const Coord = styled.p`
  margin-top: 0.5em;
`;

function TopGenres() {
  const [topGenres, setTopGenres] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const long = await getTopGenresLong(5);
      setTopGenres(long);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <Header>
        <h3>Top Genres All Time</h3>
        <MoreLink to="/top-genres">SEE MORE</MoreLink>
      </Header>

      {topGenres ? (
        <Genres>
          {Object.keys(topGenres.genres).map((genre, index) => (
            <Genre
              key={index}
              genre={genre}
              width={(topGenres.genres[genre] / topGenres.ratio) * 100}
              percentage={topGenres.genres[genre]}
            />
          ))}
        </Genres>
      ) : null}

      <Axis />

      {topGenres ? (
        <Coords>
          {topGenres.range.map((coord, index) => (
            <Coord key={index}>{coord}</Coord>
          ))}
        </Coords>
      ) : null}
    </Section>
  );
}

export default TopGenres;
