import { useEffect, useState } from "react";
import {
  getUserData,
  getTopTracks,
  getTopArtists,
  getSeveralArtists,
} from "../logic";

// Components
import User from "components/User";
import TopTracksPreview from "components/TopTracksPreview";
import TopArtistsPreview from "components/TopArtistsPreview";
import TopGenresPreview from "components/TopGenresPreview";
import TopTrack from "components/TopTrack";
import TopArtist from "components/TopArtist";

function Profile() {
  const [user, setUser] = useState(null);
  const [followees, setFollowees] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  const [topTracks, setTopTracks] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  const [topTrack, setTopTrack] = useState(null);
  const [topArtist, setTopArtist] = useState(null);

  const [topGenres, setTopGenres] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getData();
    getTopTracksData();
    getTopArtistsData();
    getTopGenres();
    getTopTrack();
    getTopArtist();
  }, []);

  const getTopTrack = async () => {
    try {
      const response = await getTopTracks("short_term", 1);
      setTopTrack(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopArtist = async () => {
    try {
      const response = await getTopArtists("short_term", 1);
      setTopArtist(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const { userData, followeesData, playlistData } = await getUserData();
      setUser(userData.data);
      setFollowees(followeesData.data);
      setPlaylists(playlistData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopTracksData = async () => {
    try {
      const response = await getTopTracks("long_term", 10);
      //console.log("tracks", response.data.items);
      setTopTracks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopArtistsData = async () => {
    try {
      const response = await getTopArtists("long_term", 10);
      //console.log("artists", response.data.items);
      setTopArtists(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopGenres = async () => {
    const response = await getTopTracks("long_term", 50);
    const tracks = response.data.items;
    const artists = [];
    for (let i = 0; i < tracks.length; i++) {
      for (let j = 0; j < tracks[i].artists.length; j++) {
        const artist = tracks[i].artists[j];
        if (!artists.includes(artist)) {
          artists.push(artist.id);
        }
      }
    }

    let artists_list = [];
    while (artists.length > 0) {
      if (artists.length >= 50) {
        artists_list.push(artists.splice(0, 50));
      } else {
        artists_list.push(artists.splice(0, artists.length));
      }
    }

    let genresMap = {};
    for (let i = 0; i < artists_list.length; i++) {
      let ids = artists_list[i].join(",");
      let response = await getSeveralArtists(ids);
      let data = response.data.artists;
      for (let j = 0; j < data.length; j++) {
        let genres = data[j].genres;
        for (let k = 0; k < genres.length; k++) {
          let genre = genres[k];
          if (!genresMap[genre]) {
            genresMap[genre] = 0;
          }
          genresMap[genre] += 1;
        }
      }
    }

    let sortable = [];
    for (let genre in genresMap) {
      sortable.push([genre, genresMap[genre]]);
    }
    sortable.sort((a, b) => b[1] - a[1]);
    let new_list = sortable.splice(0, 5);

    // get sum
    let total = 0;
    for (let elem of new_list) {
      total += elem[1];
    }
    setTotal(total);
    // console.log(total);

    let new_map = {};
    for (let elem of new_list) {
      let key = elem[0];
      let value = elem[1];
      //new_map[key] = Math.round((value / total) * 100);
      new_map[key] = value;
    }

    setTopGenres(new_map);
  };

  if (!user || !followees || !playlists) {
    return null;
  }

  return (
    <div style={{ marginLeft: "200px" }}>
      {user ? (
        <User
          username={user.display_name}
          image={user.images[0] ? user.images[0].url : null}
          followers={user.followers.total}
          following={followees.artists.total}
          playlists={playlists.total}
        />
      ) : null}
      {topTracks ? <TopTracksPreview data={topTracks} /> : null}
      {topArtists ? <TopArtistsPreview data={topArtists} /> : null}
      {topTrack ? <TopTrack data={topTrack} /> : null}
      {topArtist ? <TopArtist data={topArtist} /> : null}
      {topGenres ? (
        <TopGenresPreview genresData={topGenres} total={total} />
      ) : null}
    </div>
  );
}

export default Profile;
