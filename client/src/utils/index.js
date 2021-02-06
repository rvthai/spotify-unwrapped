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
  window.location.replace("/");
};

/* API CALLS -------------------------------------------------------------*/

export const getUser = () =>
  axios.get(`https://api.spotify.com/v1/me`, {
    headers: { Authorization: "Bearer " + token },
  });

export const getFollowing = () =>
  axios.get("https://api.spotify.com/v1/me/following?type=artist", {
    headers: { Authorization: "Bearer " + token },
  });

export const getPlaylists = (url = `https://api.spotify.com/v1/me/playlists`) =>
  axios.get(url, {
    headers: { Authorization: "Bearer " + token },
  });

export const getTopTracks = ({ time_range, limit }) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=${time_range}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
export const getTopTracksLong = (limit = 50) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=long_term`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
export const getTopTracksMedium = (limit = 50) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=medium_term`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
export const getTopTracksShort = (limit = 50) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=short_term`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

export const getTopArtists = ({ time_range, limit }) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=${time_range}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
export const getTopArtistsLong = (limit = 50) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=long_term`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
export const getTopArtistsMedium = (limit = 50) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=medium_term`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
export const getTopArtistsShort = (limit = 50) =>
  axios.get(
    `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=short_term`,
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

export const getFollowStatus = (id) =>
  axios.get(
    `https://api.spotify.com/v1/me/following/contains?type=artist&ids=${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

export const followArtist = (id) =>
  axios.put(
    `https://api.spotify.com/v1/me/following?type=artist&ids=${id}`,
    null,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

export const unfollowArtist = (id) =>
  axios.delete(
    `https://api.spotify.com/v1/me/following?type=artist&ids=${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

export const getTopGenresLong = async (limit = 10) => {
  const response = await getTopTracksLong();
  const tracks = response.data.items;

  const { genres, max } = await getGenres(tracks, limit);
  const range = getRange(max);
  const ratio = Math.round(max / 10) * 10;

  const data = {
    genres: genres,
    range: range,
    ratio: ratio,
  };

  return data;
};

export const getTopGenresMedium = async (limit = 10) => {
  const response = await getTopTracksMedium();
  const tracks = response.data.items;

  const { genres, max } = await getGenres(tracks, limit);
  const range = getRange(max);
  const ratio = Math.round(max / 10) * 10;

  const data = {
    genres: genres,
    range: range,
    ratio: ratio,
  };

  return data;
};

export const getTopGenresShort = async (limit = 10) => {
  const response = await getTopTracksShort();
  const tracks = response.data.items;

  const { genres, max } = await getGenres(tracks, limit);
  const range = getRange(max);
  const ratio = Math.round(max / 10) * 10;

  const data = {
    genres: genres,
    range: range,
    ratio: ratio,
  };

  return data;
};

/* Helper Functions -------------------------------------------------------------*/
export const isSingleLine = (el) => {
  let singleLine = false;

  const height = el.offsetHeight;
  const fontSize = parseFloat(
    window.getComputedStyle(el, null).getPropertyValue("font-size")
  );
  let lineHeight = window
    .getComputedStyle(el, null)
    .getPropertyValue("line-height");

  if (lineHeight === "normal") {
    lineHeight = fontSize + fontSize * 0.2;
  }

  const numOfLines = Math.round(height / lineHeight);

  if (numOfLines === 1) {
    singleLine = true;
  }

  return singleLine;
};

export const convertTime = (ms) => {
  const min = Math.floor((ms / 1000 / 60) << 0);
  const sec = Math.floor((ms / 1000) % 60);

  let connector = ":";
  if (sec < 10) {
    connector += "0";
  }

  return min + connector + sec;
};

export const joinArtists = (a) => {
  let l = [];

  for (let i = 0; i < a.length; i++) {
    l.push(a[i].name);
  }

  return l.join(", ");
};

export const playTrack = ({ url, track }) => {
  const audio = new Audio(url);
  audio.volume = 0.1;
  audio.onended = () => null;

  if (!track) {
    // Play
    audio.play();
    return audio;
  } else if (url === track.src) {
    // Stop
    track.pause();
    track.currentTime = 0;
    return null;
  } else {
    // Play New Track
    track.pause();
    track.currentTime = 0;
    audio.play();
    return audio;
  }
};

const getGenres = async (tracks, limit) => {
  let genres = {};

  const artists = await getArtists(tracks);

  for (let i = 0; i < artists.length; i++) {
    let artistGenres = artists[i].genres;
    for (let j = 0; j < artistGenres.length; j++) {
      let genre = artistGenres[j];
      if (!genres[genre]) {
        genres[genre] = 0;
      }
      genres[genre] += 1;
    }
  }

  let entries = Object.entries(genres);
  entries.sort((a, b) => b[1] - a[1]);
  entries = entries.splice(0, limit);

  const total = entries.reduce((sum, entry) => sum + entry[1], 0);
  const max =
    (entries.reduce((max, entry) => Math.max(max, entry[1]), 0) / total) * 100;

  genres = entries.reduce((accumulator, entry) => {
    const key = entry[0];
    const value = Math.round((entry[1] / total) * 100); // Convert to a percentage
    accumulator[key] = value;
    return accumulator;
  }, {});

  return { genres, max };
};

const getArtists = async (tracks) => {
  let artists = [];

  let artistIds = new Set();

  for (let i = 0; i < tracks.length; i++) {
    let trackArtists = tracks[i].artists;
    for (let j = 0; j < trackArtists.length; j++) {
      artistIds.add(trackArtists[j].id);
    }
  }

  artistIds = [...artistIds];

  while (artistIds.length > 0) {
    let ids = "";
    if (artistIds.length >= 50) {
      ids = artistIds.splice(0, 50).join(",");
    } else {
      ids = artistIds.splice(0, artistIds.length).join(",");
    }

    const response = await getSeveralArtists(ids);
    artists = artists.concat(response.data.artists);
  }

  return artists;
};

const getRange = (max) => {
  let range = [];

  const limit = Math.ceil(max / 10) * 10;
  const interval = limit / 5;

  for (let i = 0; i <= limit; i += interval) {
    range.push(i);
  }

  return range;
};
