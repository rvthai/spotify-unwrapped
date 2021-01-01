import { useEffect, useState } from "react";

const container = {
  display: "flex",
};

const trackStyles = {
  display: "flex",
  alignContent: "center",
  padding: "1em",
};

const artistStyles = {
  display: "flex",
  alignContent: "center",
  padding: "1em",
};

function Profile(props) {
  const [topTracks, setTopTracks] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  useEffect(() => {
    getTopTracks();
    getTopArtists();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const LAST_6_MONTHS = "medium_term";
  const ALL_TIME = "long_term";
  const LAST_4_WEEKS = "short_term";

  const getTopTracks = async () => {
    const data = await fetch(
      `https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=${ALL_TIME}`,
      {
        headers: { Authorization: "Bearer " + props.accessToken },
      }
    );
    const results = await data.json();
    setTopTracks(results.items);
  };

  const getTopArtists = async () => {
    const data = await fetch(
      `https://api.spotify.com/v1/me/top/artists?limit=50&time_range=${ALL_TIME}`,
      {
        headers: { Authorization: "Bearer " + props.accessToken },
      }
    );
    const results = await data.json();
    console.log(results);
    setTopArtists(results.items);
  };

  return (
    <div style={container}>
      {/* <p>Access Token: {props.accessToken}</p>
      <p>Refresh Token: {props.refreshToken}</p> */}
      <div>
        TOP TRACKS
        {topTracks
          ? topTracks.map((track, index) => (
              <div key={index} style={trackStyles}>
                <p>#{index + 1}</p>
                <img
                  style={{ marginLeft: "2em", width: "50px", height: "50px" }}
                  src={track.album.images[2].url}
                  alt="album-cover"
                />
                <p style={{ marginLeft: "1em" }}>{track.name}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        TOP ARTISTS
        {topArtists
          ? topArtists.map((artist, index) => (
              <div key={index} style={artistStyles}>
                <p>#{index + 1}</p>
                <img
                  style={{
                    marginLeft: "2em",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  src={artist.images[2].url}
                  alt="album-cover"
                />
                <p style={{ marginLeft: "1em" }}>{artist.name}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Profile;
