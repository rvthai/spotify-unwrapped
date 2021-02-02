import React, { useState, useEffect } from "react";
import styled from "styled-components";

// API
import { getTopTracks, getSeveralArtists } from "utils";

// Components
import Ranges from "components/Ranges";
import Genre from "components/Genre";

// Styles
import { Main, Section, Header } from "styles";
import { theme } from "styles";

const { color } = theme;

const HeaderA = styled(Header)`
  border: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
`;
const Title = styled.h1`
  margin: 0;
`;

const Bars = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1em;
`;

const Axis = styled.div`
  width: 100%;
  height: 1px;
  background: ${color.gray};
  margin: 1em 0;
`;

function TopGenres(props) {
  // Data for genre data
  const [topGenres, setTopGenres] = useState(null);
  const [total, setTotal] = useState(0);
  const [max, setMax] = useState(0);
  const ratio = Math.round(max / 10) * 10;
  const percent = 80;
  const [term, setTerm] = useState("long_term");

  const [axisData, setAxisData] = useState([]);

  useEffect(() => {
    getTopGenres();

    if (max !== 0) {
      const limit = Math.ceil(max / 10) * 10;
      const interval = limit / 5;
      let range = [];

      for (let i = 0; i <= limit; i += interval) {
        range.push(i);
      }

      setAxisData(range);
    }
  }, [max, term]);

  const getTopGenres = async () => {
    // Get the top tracks
    const response = await getTopTracks({
      time_range: term,
      limit: 50,
    });
    const tracks = response.data.items;

    // Get the id of the first artist of each track
    const artists = [];
    for (let i = 0; i < tracks.length; i++) {
      const artist = tracks[i].artists[0];
      if (!artists.includes(artist)) {
        artists.push(artist.id);
      }
    }

    // Since the getSeveralArtist API has a max limit of 50, we must split up the list if there is more than 50 artists
    let artists_groups = [];
    while (artists.length > 0) {
      if (artists.length >= 50) {
        artists_groups.push(artists.splice(0, 50)); // this gets 50 artists and modifies the array
      } else {
        artists_groups.push(artists.splice(0, artists.length)); // up to the end of the array if less than 50
      }
    }

    // Make an API call to get the artists and their genres
    let data = null;
    for (let i = 0; i < artists_groups.length; i++) {
      let id_str = artists_groups[i].join(","); // Join a group of artists into a full string to be passed as a query param
      let response = await getSeveralArtists(id_str); // Make the API call
      data = response.data.artists;
    }

    // Create a map of each genre and their occurence
    let genresMap = {};
    for (let i = 0; i < data.length; i++) {
      let genres = data[i].genres;
      for (let j = 0; j < genres.length; j++) {
        let genre = genres[j];
        if (!genresMap[genre]) {
          genresMap[genre] = 0;
        }
        genresMap[genre] += 1;
      }
    }

    // Get the top five genres that occur the most by sorting the object (must convert object to array first)
    let entries = Object.entries(genresMap);
    entries.sort((a, b) => b[1] - a[1]);
    entries = entries.splice(0, 10);

    // Get the total needed to calculate the percentages for the chart
    const t = entries.reduce((accumulator, entry) => accumulator + entry[1], 0);
    //setTotal(total);
    const m = entries.reduce(
      (accumulator, entry) => Math.max(accumulator, entry[1]),
      0
    );
    //setMax((m / t) * 100);

    // Remake map with top five genres and their respective percentages
    genresMap = entries.reduce((accumulator, entry) => {
      const key = entry[0];
      const value = Math.round((entry[1] / t) * 100); // Convert to a percentage
      accumulator[key] = value;
      return accumulator;
    }, {});

    // Change state
    setTopGenres(genresMap);
    setMax((m / t) * 100);
    setTotal(total);
  };

  const onTermChange = (t) => {
    setTerm(t);
  };

  return (
    <Main>
      <Section>
        <HeaderA>
          <Title>Top Genres</Title>
          <Ranges onTermChange={onTermChange} />
        </HeaderA>
        {topGenres ? (
          <Bars>
            {Object.keys(topGenres).map((genre, index) => (
              <Genre
                key={index}
                name={genre}
                width={(topGenres[genre] / ratio) * percent}
                percentage={topGenres[genre]}
              />
            ))}
          </Bars>
        ) : null}
        <Axis />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {axisData.map((num, index) => (
            <p style={{ color: `${color.gray}` }} key={index}>
              {num}
            </p>
          ))}
        </div>
      </Section>
    </Main>
  );
}

export default TopGenres;
