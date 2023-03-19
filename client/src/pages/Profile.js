import React, { useEffect, useState } from "react";
import { Main } from "styles";
import { theme } from "styles";
import {
  getUser,
  getFollowing,
  getPlaylists,
  getTopTracksLong,
  getTopArtistsLong,
  getTopGenresLong,
} from "utils";

// Components
import Loader from "components/Loader";
import User from "components/User";
import TopTracks from "components/TopTracks";
import TopArtists from "components/TopArtists";
import TopGenres from "components/TopGenres";

const { color } = theme;

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topGenres, setTopGenres] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const userData = await getUser();
      const followingData = await getFollowing();
      const playlistsData = await getPlaylists();
      const topTracksData = await getTopTracksLong(5);
      const topArtistsData = await getTopArtistsLong(5);
      const topGenresData = await getTopGenresLong(5);

      const data = {
        user: userData.data,
        following: followingData.data,
        playlists: playlistsData.data,
      };

      setUser(data);
      setTopTracks(topTracksData.data.items);
      setTopArtists(topArtistsData.data.items);
      setTopGenres(topGenresData);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  if (isLoading) return <Loader color={color.lightGray} isPage={true} />;

  return (
    <Main>
      {user ? <User data={user} /> : null}
      {topTracks ? <TopTracks data={topTracks} /> : null}
      {topArtists ? <TopArtists data={topArtists} /> : null}
      {topGenres ? <TopGenres data={topGenres} /> : null}
    </Main>
  );
}

export default Profile;
