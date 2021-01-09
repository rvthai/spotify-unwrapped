import axios from "axios";

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

const EXPIRATION_TIME = 3600 * 1000; // Spotify access tokens last for 1 hour

const setTokenTimestamp = () =>
  window.localStorage.setItem("spotify_token_timestamp", Date.now());
const getTokenTimestamp = () =>
  window.localStorage.getItem("spotify_token_timestamp");

const setLocalAccessToken = (token) => {
  setTokenTimestamp();
  window.localStorage.setItem("spotify_access_token", token);
};
const getLocalAccessToken = () =>
  window.localStorage.getItem("spotify_access_token");

const setLocalRefreshToken = (token) =>
  window.localStorage.setItem("spotify_refresh_token", token);
const getLocalRefreshToken = () =>
  window.localStorage.getItem("spotify_refresh_token");

const refreshAccessToken = async () => {
  try {
    const { data } = await axios.get(
      `/refresh_token?refresh_token=${getLocalRefreshToken()}`
    );
    const { access_token } = data;
    setLocalAccessToken(access_token);
    window.location.reload();
    return;
  } catch (e) {
    console.error(e);
  }
};

const getAccessToken = () => {
  const { error, access_token, refresh_token } = getHashParams();

  // hanlde on error
  if (error) {
    console.log(error);
    refreshAccessToken();
  }
  // handle on expiration
  if (Date.now() - getTokenTimestamp() > EXPIRATION_TIME) {
    console.log("EXPIRED! Refreshing access token...");
    refreshAccessToken();
  }

  const localAccessToken = getLocalAccessToken();
  const localRefreshToken = getLocalRefreshToken();

  // If there is no REFRESH token in local storage, set it as `refresh_token` from params
  if (!localRefreshToken || localRefreshToken === "undefined") {
    setLocalRefreshToken(refresh_token);
  }

  // If there is no ACCESS token in local storage, set it and return `access_token` from params
  if (!localAccessToken || localAccessToken === "undefined") {
    setLocalAccessToken(access_token);
    return access_token;
  }

  return localAccessToken;
};

export const token = getAccessToken();

export const logout = () => {
  window.localStorage.removeItem("spotify_token_timestamp");
  window.localStorage.removeItem("spotify_access_token");
  window.localStorage.removeItem("spotify_refresh_token");
  window.location.reload();
};

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
    headers: { Authorization: "Bearer " + token }, // BECAUSE OF THIS IT DIDNT WORK
  });

  const followeesData = await axios.get(
    "https://api.spotify.com/v1/me/following?type=artist",
    {
      headers: { Authorization: "Bearer " + token },
    }
  );

  const playlistData = await axios.get(
    `https://api.spotify.com/v1/me/playlists`,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );

  return { userData, followeesData, playlistData };
};

export const getTopTracks = (time_range, limit) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=${time_range}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

export const getTopArtists = (time_range, limit) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=${time_range}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

export const getSeveralArtists = (ids) =>
  axios.get(`https://api.spotify.com/v1/artists?ids=${ids}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
