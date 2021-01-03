import { useEffect, useState } from "react";

const container = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
  width: "1000px",
};

const trackStyles = {
  display: "flex",
  alignItems: "center",
  padding: "1em",
};

const artistStyles = {
  display: "flex",
  alignItems: "center",
  padding: "1em",
};

const genreStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
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
  width: "150px",
  height: "100vh",
  background: "#121212",
};

const rightSideStyles = {
  marginLeft: "150px",
  marginTop: "5rem",
  display: "flex",
  justifyContent: "center",
};

function Profile(props) {
  const [userProfile, setUserProfile] = useState(null);
  const [userFollows, setUserFollows] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [userRecentlyPlayed, setRecentlyPlayed] = useState(null);
  const [topGenres, setTopGenres] = useState([
    "Pop",
    "Country",
    "HipHop",
    "R&B",
    "EDM",
    "Indie",
    "Folk",
    "Jazz",
    "Techno",
    "Rock",
  ]);

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
    setUserFollows(results);
  };

  const getUserProfile = async () => {
    const data = await fetch(`https://api.spotify.com/v1/me`, {
      headers: { Authorization: "Bearer " + props.accessToken },
    });
    const results = await data.json();
    console.log(results);
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
          <li>Sign Out</li>
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

          <div style={container}>
            <div style={{ width: "33%", marginRight: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>TOP ARTISTS OF ALL TIME</p>
                <p style={{ opacity: 0.5 }}>See More</p>
              </div>
              {topArtists
                ? topArtists.map((artist, index) => (
                    <div key={index} style={artistStyles}>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        src={artist.images[2].url}
                        alt="album-cover"
                      />
                      <p
                        style={{
                          marginLeft: "1em",
                        }}
                      >
                        {artist.name}
                      </p>
                    </div>
                  ))
                : null}
            </div>

            <div
              style={{ width: "33%", marginLeft: "2rem", marginRight: "2rem" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>TOP TRACKS OF ALL TIME</p>
                <p style={{ opacity: 0.5 }}>See More</p>
              </div>
              {topTracks
                ? topTracks.map((track, index) => (
                    <div key={index} style={trackStyles}>
                      <img
                        style={{
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
            </div>

            <div style={{ width: "33%", marginLeft: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>TOP GENRES OF ALL TIME</p>
                <p style={{ opacity: 0.5 }}>See More</p>
              </div>
              {topGenres.map((genre, index) => (
                <div key={index} style={genreStyles}>
                  <p>{genre}</p>
                  <div
                    style={{
                      height: "25px",
                      width: "150px",
                      background: "#1db954",
                      borderRadius: "25px",
                      marginLeft: "2rem",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
