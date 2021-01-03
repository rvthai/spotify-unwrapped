const axios = require("axios");

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

export const getTopTracks = () =>
  axios.get(
    `https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term`,
    {
      headers: {
        Authorization: "Bearer " + token.access_token,
      },
    }
  );
