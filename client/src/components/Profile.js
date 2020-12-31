import { useEffect, useState } from "react";

const trackStyles = {
  display: "flex",
  alignContent: "center",
  padding: "1em",
};

function Profile(props) {
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    getTopTracks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getTopTracks = async () => {
    const data = await fetch("https://api.spotify.com/v1/me/top/tracks", {
      headers: { Authorization: "Bearer " + props.accessToken },
    });
    const results = await data.json();
    console.log(results);
    setTopTracks(results.items);
  };

  return (
    <div>
      <p>Access Token: {props.accessToken}</p>
      <p>Refresh Token: {props.refreshToken}</p>
      {topTracks
        ? topTracks.map((track, index) => (
            <div key={index} style={trackStyles}>
              <p>#{index}</p>
              <img
                style={{ marginLeft: "2em" }}
                src={track.album.images[2].url}
                alt="album-cover"
              />
              <p style={{ marginLeft: "1em" }}>{track.name}</p>
            </div>
          ))
        : null}
    </div>
  );
}

export default Profile;
