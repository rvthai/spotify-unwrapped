import React, { useState, useEffect } from "react";
import { getTopGenresLong, getTopGenresMedium, getTopGenresShort } from "utils";
import styled from "styled-components";
import { Main, Section, PageHeader } from "styles";
import { theme, mixins, media } from "styles";

// Components
import Loader from "components/Loader";
import Ranges from "components/Ranges";
import Genre from "components/Genre";

const { color, fontSize } = theme;

const Title = styled.h1`
  font-size: ${fontSize.xl};
  margin: 0;

  ${media.tablet`
    margin-bottom: 0.5em;
  `}
`;

const Genres = styled.div`
  ${mixins.flexColumn}
  margin-top: 2em;
  width: 100%;
`;

// const Axis = styled.div`
//   width: 100%;
//   height: 1px;
//   background: ${color.gray};
//   margin: 1em 0;
// `;

function TopGenres() {
  const [isLoading, setIsLoading] = useState(true);
  const [topGenres, setTopGenres] = useState(null);
  const [term, setTerm] = useState("long");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const long = await getTopGenresLong();
      const medium = await getTopGenresMedium();
      const short = await getTopGenresShort();

      const data = {
        long: long,
        medium: medium,
        short: short,
      };

      setTopGenres(data);
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
          <Title>Top Genres</Title>
          <Ranges onTermChange={onTermChange} />
        </PageHeader>

        {topGenres ? (
          <Genres>
            {Object.keys(topGenres[term].genres).map((genre, index) => (
              <Genre
                key={index}
                genre={genre}
                width={
                  (topGenres[term].genres[genre] / topGenres[term].ratio) * 100
                }
                percentage={topGenres[term].genres[genre]}
              />
            ))}
          </Genres>
        ) : null}

        {/* <Axis />
        {topGenres ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {topGenres[term].range.map((num, index) => (
              <p style={{ color: `${color.lightGray}` }} key={index}>
                {num}
              </p>
            ))}
          </div>
        ) : null} */}
      </Section>
    </Main>
  );
}

export default TopGenres;
