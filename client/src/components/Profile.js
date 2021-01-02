import { useEffect, useState } from "react";

const container = {
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
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

const mainContainerStyles = {};

const headerStyles = {
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
};

const sidebar = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100px",
  height: "100vh",
  background: "#121212",
};

const rightSideStyles = {
  marginLeft: "100px",
  marginTop: "5rem",
};

function Profile(props) {
  const [userProfile, setUserProfile] = useState(null);
  const [userFollows, setUserFollows] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [userRecentlyPlayed, setRecentlyPlayed] = useState(null);

  const [topTracks, setTopTracks] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  useEffect(() => {
    getUserProfile();
    getTopTracks();
    getTopArtists();
    getUserFollows();
    getUserPlaylists();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //const LAST_6_MONTHS = "medium_term";
  const ALL_TIME = "long_term";
  //const LAST_4_WEEKS = "short_term";

  const getUserPlaylists = async () => {
    const data = await fetch(`	https://api.spotify.com/v1/me/playlists`, {
      headers: { Authorization: "Bearer " + props.accessToken },
    });
    const results = await data.json();
    setUserPlaylists(results);
  };

  const getUserFollows = async () => {
    const data = await fetch(
      `https://api.spotify.com/v1/me/following?type=artist`,
      {
        headers: { Authorization: "Bearer " + props.accessToken },
      }
    );
    const results = await data.json();
    console.log(results);
    setUserFollows(results);
  };

  const getUserProfile = async () => {
    const data = await fetch(`https://api.spotify.com/v1/me`, {
      headers: { Authorization: "Bearer " + props.accessToken },
    });
    const results = await data.json();
    setUserProfile(results);
  };

  const getTopTracks = async () => {
    const data = await fetch(
      `https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=${ALL_TIME}`,
      {
        headers: { Authorization: "Bearer " + props.accessToken },
      }
    );
    const results = await data.json();
    setTopTracks(results.items);
  };

  const getTopArtists = async () => {
    const data = await fetch(
      `https://api.spotify.com/v1/me/top/artists?limit=10&time_range=${ALL_TIME}`,
      {
        headers: { Authorization: "Bearer " + props.accessToken },
      }
    );
    const results = await data.json();
    setTopArtists(results.items);
  };

  return (
    <div>
      <div style={sidebar}>
        <ul style={{ listStyle: "none", paddingLeft: "10px" }}>
          <li>logo</li>
          <li>Profile</li>
          <li>Top Tracks</li>
          <li>Top Artists</li>
          <li>Top Geners</li>
          <li>Metrics</li>
          <li>Recently Played</li>
          <li>Playlists</li>
        </ul>
      </div>
      <div style={rightSideStyles}>
        <div style={mainContainerStyles}>
          {userProfile && userFollows && userPlaylists ? (
            <div style={headerStyles}>
              <img
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                src={userProfile.images[0].url}
                alt="user-profile-pic"
              />
              <h1>{userProfile.display_name}</h1>
              <p>
                <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                  {userPlaylists.total} Playlists
                </span>
                <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                  {userProfile.followers.total} Followers
                </span>
                <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                  {userFollows.artists.total} Following
                </span>
              </p>
            </div>
          ) : null}
          <p style={headerStyles}>
            <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              Top Tracks
            </span>
            <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              Top Artists
            </span>
            <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              Top Genres
            </span>
            <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              Metrics
            </span>
            <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              Recently Played
            </span>
            <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              Playlists
            </span>
          </p>
          <div style={container}>
            <div>
              TOP TRACKS OF ALL TIME
              {topTracks
                ? topTracks.map((track, index) => (
                    <div key={index} style={trackStyles}>
                      <p>#{index + 1}</p>
                      <img
                        style={{
                          marginLeft: "2em",
                          width: "50px",
                          height: "50px",
                        }}
                        src={track.album.images[2].url}
                        alt="album-cover"
                      />
                      <p style={{ marginLeft: "1em" }}>{track.name}</p>
                    </div>
                  ))
                : null}
              <button>See more</button>
            </div>
            <div>
              TOP ARTISTS OF ALL TIME
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
              <button>See more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
