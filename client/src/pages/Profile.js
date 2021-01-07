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

function Profile() {
  const [user, setUser] = useState(null);
  const [followees, setFollowees] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  const [topTracks, setTopTracks] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  useEffect(() => {
    getData();
    getTopTracksData();
    getTopArtistsData();
    getTopGenres();
  }, []);

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

    //console.log(artists.length);

    let artists_list = [];
    while (artists.length > 0) {
      if (artists.length >= 50) {
        artists_list.push(artists.splice(0, 50));
      } else {
        artists_list.push(artists.splice(0, artists.length));
      }
    }

    //console.log(artists_list);
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

    console.log(genresMap);
  };

  if (!user || !followees || !playlists) {
    return null;
  }

  return (
    <div style={{ marginLeft: "200px" }}>
      {user ? (
        <User
          username={user.display_name}
          image={user.images[0].url}
          followers={user.followers.total}
          following={followees.artists.total}
          playlists={playlists.total}
        />
      ) : null}
      {topTracks ? <TopTracksPreview data={topTracks} /> : null}
      {topArtists ? <TopArtistsPreview data={topArtists} /> : null}
    </div>
  );
}

export default Profile;
