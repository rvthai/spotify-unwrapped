import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mixins } from "styles";

// API
import {
  getUser,
  getFollowing,
  getPlaylists,
  getTopTracks,
  getTopArtists,
  getSeveralArtists,
  getRecentlyPlayed,
} from "utils";

// Styled Components
import { Main, Section } from "styles";

// Components
import User from "components/User";
import CurrentTopTrack from "components/CurentTopTrack";
import CurrentTopArtist from "components/CurrentTopArtist";
import TopTracksPreview from "components/TopTracksPreview";
import TopArtistsPreview from "components/TopArtistsPreview";
import TopGenresPreview from "components/TopGenresPreview";
import ActivityPreview from "components/ActivityPreview";

const Preview = styled(Section)`
  ${mixins.flexRow}
  ${mixins.flexCenter}
  flex-wrap: wrap;
  align-items: stretch;
`;

function Profile() {
  // Data for User component
  // NEED TO SET THESE TO ONE OBJECT LATER FOR SINGLE RENDERING
  const [user, setUser] = useState(null);
  const [following, setFollowing] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  // Data for current top track and artist
  const [currentTopTrack, setCurrentTopTrack] = useState(null);
  const [currentTopArtist, setCurrentTopArtist] = useState(null);

  // Data for the previews
  const [topTracks, setTopTracks] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  // Data for genre data
  const [topGenres, setTopGenres] = useState(null);
  const [total, setTotal] = useState(0);
  const [max, setMax] = useState(0);

  // Data for activity
  const [playback, setPlayback] = useState(null);

  useEffect(() => {
    getUserData();
    getCurrentTopTrack();
    getCurrentTopArtist();
    getTopTracksData();
    getTopArtistsData();
    getTopGenres();
    getPlaybackData();
  }, []);

  const getUserData = async () => {
    try {
      const userData = await getUser();
      const followingData = await getFollowing();
      const playlistsData = await getPlaylists();
      setUser(userData.data);
      setFollowing(followingData.data);
      setPlaylists(playlistsData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentTopTrack = async () => {
    try {
      const response = await getTopTracks({
        time_range: "short_term",
        limit: 1,
      });
      setCurrentTopTrack(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentTopArtist = async () => {
    try {
      const response = await getTopArtists({
        time_range: "short_term",
        limit: 1,
      });
      setCurrentTopArtist(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopTracksData = async () => {
    try {
      const response = await getTopTracks({
        time_range: "long_term",
        limit: 10,
      });
      setTopTracks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopArtistsData = async () => {
    try {
      const response = await getTopArtists({
        time_range: "long_term",
        limit: 10,
      });
      setTopArtists(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopGenres = async () => {
    // Get the top tracks
    const response = await getTopTracks({
      time_range: "long_term",
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
    entries = entries.splice(0, 5);

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

  const getPlaybackData = async () => {
    const date = new Date(Date.UTC(2021, 0, 18, 20, 0, 0));
    console.log("Date in UTC:", date);
    const timestamp = date.getTime();
    console.log("Timestamp in milliseconds:", timestamp);

    try {
      const response = await getRecentlyPlayed(timestamp);
      const a = new Date(response.data.items[0].played_at);
      console.log(a.toUTCString());
      setPlayback(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      {user && following && playlists ? (
        <User
          avatar={user.images[0] ? user.images[0].url : null}
          name={user.display_name}
          followers={user.followers.total}
          following={following.artists.total}
          playlists={playlists.total}
        />
      ) : null}
      <Preview>
        {currentTopTrack ? (
          <CurrentTopTrack artist={currentTopArtist} track={currentTopTrack} />
        ) : null}
        {currentTopArtist ? (
          <CurrentTopArtist artist={currentTopArtist} track={currentTopTrack} />
        ) : null}
      </Preview>
      <Preview>
        {topTracks ? <TopTracksPreview data={topTracks} /> : null}
        {topArtists ? <TopArtistsPreview data={topArtists} /> : null}
        <div>
          {topGenres ? (
            <TopGenresPreview
              data={topGenres}
              max={max}
              total={total}
            ></TopGenresPreview>
          ) : null}
          {playback ? <ActivityPreview data={playback} /> : null}
        </div>
      </Preview>
    </Main>
  );
}

export default Profile;
