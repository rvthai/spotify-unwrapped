import axios from "axios";
//const axios = require("axios");

function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

export const token = getHashParams();

// export const logout = () => {
//   window.localStorage.removeItem('spotify_token_timestamp');
//   window.localStorage.removeItem('spotify_access_token');
//   window.localStorage.removeItem('spotify_refresh_token');
//   window.location.reload();
// };

/* API CALLS -------------------------------------------------------------*/

// const getUserPlaylists = async () => {
//   const data = await fetch(`	https://api.spotify.com/v1/me/playlists`, {
//     headers: { Authorization: "Bearer " + props.accessToken },
//   });
//   const results = await data.json();
//   setUserPlaylists(results);
// };

// const getUserFollows = async () => {
//   const data = await fetch(
//     `https://api.spotify.com/v1/me/following?type=artist`,
//     {
//       headers: { Authorization: "Bearer " + props.accessToken },
//     }
//   );
//   const results = await data.json();
//   setUserFollows(results);
// };

// const getUserProfile = async () => {
//   const data = await fetch(`https://api.spotify.com/v1/me`, {
//     headers: { Authorization: "Bearer " + props.accessToken },
//   });
//   const results = await data.json();
//   console.log(results);
//   setUserProfile(results);
// };

export const getUserData = async () => {
  const userData = await axios.get(`https://api.spotify.com/v1/me`, {
    headers: { Authorization: "Bearer " + token.access_token },
  });

  const followeesData = await axios.get(
    "https://api.spotify.com/v1/me/following?type=artist",
    {
      headers: { Authorization: "Bearer " + token.access_token },
    }
  );

  const playlistData = await axios.get(
    `https://api.spotify.com/v1/me/playlists`,
    {
      headers: { Authorization: "Bearer " + token.access_token },
    }
  );

  return { userData, followeesData, playlistData };
};

export const getTopTracks = (time_range) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=${time_range}`,
    {
      headers: {
        Authorization: "Bearer " + token.access_token,
      },
    }
  );

export const getTopArtists = (time_range) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/artists?limit=50&time_range=${time_range}`,
    {
      headers: {
        Authorization: "Bearer " + token.access_token,
      },
    }
  );
